import { useEffect, useState } from "react";
import clockLogo from "./assets/images/Clock_12-59.svg";
import { getHoursPosition, useStyles } from "./styles";
import { IOffsets, formatDate, initialOffsets, transformDate } from "./utils";
import { Time } from "./components/Time";
import { Loader } from "./components/Loader";

interface INamaz {
    [key: string]: {
        hours: number;
        minutes: number;
    };
}
interface IDate {
    day?: number;
    weekday?: string;
    month?: string;
}

interface IFetchResult {
    timings: INamaz;
    date: IDate;
}

function App() {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [offsets] = useState<IOffsets>(initialOffsets);
    const [fetchResult, setFetchResult] = useState<IFetchResult | null>(null);

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
            const tuneString = `8,${12 + offsets.Fajr},-2,${
                5 + offsets.Dhuhr
            },${0 + offsets.Asr},${5 + offsets.Maghrib},0,${
                -8 + offsets.Isha
            },-3`;

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
            console.log("data", data);
        };
        fetchData();
    }, [offsets]);

    const styles = useStyles({
        hours,
        minutes,
        seconds,
    });
    // console.log("rerender", fetchResult);

    if (!fetchResult) {
        return (
            <div className={styles.container}>
                <Loader />
            </div>
        );
    }

    const { date, timings } = fetchResult;
    return (
        <div className={styles.container}>
            <div className={styles.currentDay}>
                <div className={styles.day}>
                    <span>{date.month}</span>
                    <span>{date.day}</span>
                </div>
                <span className={styles.weekDay}>{date.weekday}</span>
            </div>

            <div className={styles.clock}>
                <img src={clockLogo} alt="clock" className={styles.clockImg} />
                <div className={styles.dot}></div>
                <div
                    className={styles.pointerWrapper}
                    style={{
                        transform: `rotate(${getHoursPosition(
                            hours,
                            minutes
                        )}deg)`,
                    }}
                >
                    <div className={styles.clockHourPointer}></div>
                </div>
                <div
                    className={styles.pointerWrapper}
                    style={{ transform: `rotate(${minutes * 6}deg)` }}
                >
                    <div className={styles.clockMinutePointer}></div>
                </div>
                <div
                    className={styles.pointerWrapper}
                    style={{ transform: `rotate(${seconds * 6}deg)` }}
                >
                    <div className={styles.clockSecondsPointer}></div>
                </div>

                {Object.entries(timings).map(([key, value]) => (
                    <div
                        key={key}
                        className={styles.clockNamaz}
                        style={{
                            transform: `rotate(${getHoursPosition(
                                value.hours,
                                value.minutes
                            )}deg)`,
                        }}
                    >
                        <div
                            className={styles.clockNamazItem}
                            style={{
                                transform: `rotate(-${getHoursPosition(
                                    value.hours,
                                    value.minutes
                                )}deg)`,
                                opacity: key === "Fajr" ? 0.2 : 1,
                            }}
                        >
                            <span>{key}</span>
                            <span>
                                {formatDate(value.hours, value.minutes)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <Time hours={hours} minutes={minutes} seconds={seconds} />
        </div>
    );
}

export default App;
