import React from "react";
import { useTimeStyles } from "./styles";
import classNames from "classnames";

interface ITimeProps {
    hours: number;
    minutes: number;
    seconds: number;
}

export const Time: React.FC<ITimeProps> = ({ hours, minutes, seconds }) => {
    const styles = useTimeStyles();

    const renderDigits = (time: number, additionalClass: string = "") => {
        const formattedTime = time < 10 ? `0${time}` : `${time}`;
        return (
            <span className={classNames(styles.timeValue, additionalClass)}>
                {formattedTime.split("").map((digit, i) => (
                    <span key={`${i}_${digit}`} className={styles.digit}>
                        {digit}
                    </span>
                ))}
            </span>
        );
    };

    return (
        <div className={styles.time}>
            {renderDigits(hours)}
            <span className={styles.colon}>:</span>
            {renderDigits(minutes)}
            <span className={styles.colon}>:</span>
            {renderDigits(seconds, styles.seconds)}
        </div>
    );
};
