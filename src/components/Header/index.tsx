import React from "react";
import { useHeaderStyles } from "./styles";
import { IDate } from "../../useFetchData";

interface IHeaderProps {
    date: IDate;
}

export const Header: React.FC<IHeaderProps> = ({ date }) => {
    const styles = useHeaderStyles();

    return (
        <div className={styles.currentDay}>
            <div className={styles.day}>
                <span>{date.month}</span>
                <span>{date.day}</span>
            </div>
            <span className={styles.weekDay}>{date.weekday}</span>
        </div>
    );
};
