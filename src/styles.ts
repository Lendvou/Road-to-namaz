import { createUseStyles } from "react-jss";
import { primaryColor } from "./utils";

export const getHoursPosition = (hours: number, minutes: number): number => {
    hours = hours > 12 ? hours - 12 : hours;
    return hours * 30 + minutes * 0.5;
};

type StyleProps = {
    hours: number;
    minutes: number;
    seconds: number;
};

export const useStyles = createUseStyles<string, StyleProps>({
    container: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        backgroundColor: "#1B1B1F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        color: "white",
        overflow: "hidden",
    },
    currentDay: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "6rem",
        // marginBottom: 110,
        // color: primaryColor,
    },
    day: {
        fontSize: "1.5rem",
        marginBottom: 4,
        fontFamily: "Montserrat-semibold",
        "& > span": {
            marginRight: 5,
            marginLeft: 5,
        },
    },
    weekDay: {
        fontSize: "1rem",
    },
    clock: {
        width: "70%",
        position: "relative",
        margin: "0 auto 140px",
    },
    clockImg: {
        width: "100%",
    },
    dot: {
        position: "absolute",
        width: "9.5%",
        height: "9.5%",
        borderRadius: 100,
        backgroundColor: "white",
        top: "44%",
        left: "45%",
        zIndex: 1,
    },
    pointerWrapper: {
        position: "absolute",
        height: "96%",
        top: "0.5%",
        left: "48%",
        width: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    clockHourPointer: {
        width: "75%",
        height: "60%",
        background: "linear-gradient(0deg, transparent 50%, white 50%)",
    },
    clockMinutePointer: {
        width: "45%",
        height: "70%",
        background: "linear-gradient(0deg, transparent 50%, white 50%)",
    },
    clockSecondsPointer: {
        width: "28%",
        height: "83%",
        background: `linear-gradient(0deg, transparent 50%, ${primaryColor} 50%)`,
    },

    clockNamaz: {
        position: "absolute",
        top: "-20%",
        left: "40%",
        height: "138%",
        width: 60,
        // "&:before": {
        //     content: '" "',
        //     height: "100%",
        //     width: 2,
        //     backgroundColor: primaryColor,
        //     zIndex: 4,
        // },
    },
    clockNamazItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: primaryColor,
        fontFamily: "Montserrat-semibold",
        fontSize: "1rem",
    },
});
