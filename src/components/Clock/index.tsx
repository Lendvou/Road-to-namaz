import React from "react";
import { useClockStyles } from "./styles";
import clockLogo from "../../assets/images/Clock_12-59.svg";
import { formatDate, getHoursPosition } from "../../utils";
import { ITimings } from "../../useFetchData";

interface IClockProps {
    hours: number;
    minutes: number;
    seconds: number;
    timings: ITimings;
}

export const Clock: React.FC<IClockProps> = ({
    hours,
    minutes,
    seconds,
    timings,
}) => {
    const styles = useClockStyles();

    return (
        <div className={styles.clock}>
            <img src={clockLogo} alt="clock" className={styles.clockImg} />
            <div className={styles.dot}></div>
            <div
                className={styles.pointerWrapper}
                style={{
                    transform: `rotate(${getHoursPosition(hours, minutes)}deg)`,
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
                        <span>{formatDate(value.hours, value.minutes)}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
