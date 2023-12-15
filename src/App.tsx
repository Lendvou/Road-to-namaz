import { useEffect, useState } from "react";
import { getOffsetsFromStorage, saveOffsetsToStorage } from "./utils";
import { useAppStyles } from "./styles";
import { IOffsets } from "./utils";
import { Time } from "./components/Time";
import { Loader } from "./components/Loader";
import { SettingsModal } from "./components/SettingsModal";
import { Clock } from "./components/Clock";
import { Header } from "./components/Header";
import { InstallButton } from "./components/InstallButton";
import { useFetchData } from "./useFetchData";

interface ITime {
    hours: number;
    minutes: number;
    seconds: number;
}

function App() {
    const [time, setTime] = useState<ITime>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [offsets, setOffsets] = useState<IOffsets>(getOffsetsFromStorage());

    const handleOffsetsChange = (newOffsets: IOffsets) => {
        setOffsets(newOffsets);
        saveOffsetsToStorage(newOffsets);
    };

    const { data, isLoading, error } = useFetchData({ offsets });

    useEffect(() => {
        const setCurrentTime = () => {
            const date = new Date();
            setTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });
        };

        setCurrentTime();
        const interval = setInterval(setCurrentTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const styles = useAppStyles();
    return (
        <div className={styles.container}>
            <InstallButton isDisabled={!data} />

            {isLoading ? (
                <Loader />
            ) : data ? (
                <>
                    <SettingsModal
                        offsets={offsets}
                        onSave={handleOffsetsChange}
                    />

                    <Header date={data.date} />

                    <Clock
                        hours={time.hours}
                        minutes={time.minutes}
                        seconds={time.seconds}
                        timings={data.timings}
                    />

                    <Time
                        hours={time.hours}
                        minutes={time.minutes}
                        seconds={time.seconds}
                    />
                </>
            ) : (
                <span className={styles.errorMessage}>{error}</span>
            )}
        </div>
    );
}

export default App;
