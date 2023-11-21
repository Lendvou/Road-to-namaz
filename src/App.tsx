import { useEffect, useState } from "react";
import {
    getOffsetsFromStorage,
    getTuneString,
    saveOffsetsToStorage,
} from "./utils";
import { useStyles } from "./styles";
import { IOffsets, transformDate } from "./utils";
import { Time } from "./components/Time";
import { Loader } from "./components/Loader";
import { SettingsModal } from "./components/SettingsModal";
import { Clock } from "./components/Clock";
import { Header } from "./components/Header";
import { InstallButton } from "./components/InstallButton";

export interface ITimings {
    [key: string]: {
        hours: number;
        minutes: number;
    };
}
export interface IDate {
    day?: number;
    weekday?: string;
    month?: string;
}

interface IFetchResult {
    timings: ITimings;
    date: IDate;
}

function App() {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [offsets, setOffsets] = useState<IOffsets>(getOffsetsFromStorage());
    const [fetchResult, setFetchResult] = useState<IFetchResult | null>(null);
    const [installEvent, setInstallEvent] = useState<Event | null>(null);

    const handleOffsetsChange = (newOffsets: IOffsets) => {
        setOffsets(newOffsets);
        saveOffsetsToStorage(newOffsets);
    };

    useEffect(() => {
        const setTime = () => {
            const date = new Date();
            setHours(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
        };
        setTime();
        const interval = setInterval(setTime, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const tuneString = getTuneString(offsets);

            const { data } = await (
                await fetch(
                    `https://api.aladhan.com/v1/timingsByAddress?address=Makhachkala,RU&method=8&tune=${tuneString}`
                )
            ).json();
            const result = {
                Fajr: transformDate(data.timings.Fajr),
                Dhuhr: transformDate(data.timings.Dhuhr),
                Asr: transformDate(data.timings.Asr),
                Maghrib: transformDate(data.timings.Maghrib),
                Isha: transformDate(data.timings.Isha),
            };
            const dateObj: IDate = {
                day: Number(data.date.gregorian.day),
                month: data.date.gregorian.month.en,
                weekday: data.date.gregorian.weekday.en,
            };
            setFetchResult({
                timings: result,
                date: dateObj,
            });
        };
        fetchData();
    }, [offsets]);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            setInstallEvent(e);
        });
        window.addEventListener("appinstalled", () => {
            setInstallEvent(null);
        });
    }, []);

    const styles = useStyles();
    return (
        <div className={styles.container}>
            {!fetchResult ? (
                <Loader />
            ) : (
                <>
                    <InstallButton installEvent={installEvent} />

                    <SettingsModal
                        offsets={offsets}
                        onSave={handleOffsetsChange}
                    />

                    <Header date={fetchResult.date} />

                    <Clock
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                        timings={fetchResult.timings}
                    />

                    <Time hours={hours} minutes={minutes} seconds={seconds} />
                </>
            )}
        </div>
    );
}

export default App;
