import { createUseStyles } from "react-jss";
import { bgColor, primaryColor } from "./utils";

type StyleProps = {
    hours: number;
    minutes: number;
    seconds: number;
};

export const useStyles = createUseStyles<string, StyleProps>({
    container: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        color: "white",
        overflow: "hidden",
    },
    installButton: {
        textTransform: "uppercase",
        color: "white",
        position: "absolute",
        left: "4%",
        top: "2%",
        fontFamily: "Montserrat-semibold",
        fontSize: "0.9rem",
        outline: 0,
        border: "none",
    },
    settingsButton: {
        position: "absolute",
        top: "2%",
        right: "4%",
        width: "24px",
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
        "@media (min-width: 576px)": {
            fontSize: "1.8rem",
        },
        "& > span": {
            marginRight: 5,
            marginLeft: 5,
        },
    },
    weekDay: {
        fontSize: "1rem",
        "@media (min-width: 576px)": {
            fontSize: "1.3rem",
        },
    },
    clock: {
        width: "70%",
        position: "relative",
        margin: "0 auto 140px",
        "@media (min-width: 576px)": {
            width: "60%",
        },
        "@media (min-width: 768px)": {
            width: "40%",
        },
        "@media (min-width: 1280px)": {
            width: "30%",
        },
        "@media (min-width: 1400px)": {
            width: "20%",
        },
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
        // width: 60,
    },
    clockNamazItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: primaryColor,
        fontFamily: "Montserrat-semibold",
        fontSize: "1rem",
        "@media (min-width: 576px)": {
            fontSize: "1.5rem",
        },
    },
});
