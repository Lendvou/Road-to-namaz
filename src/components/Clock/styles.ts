import { createUseStyles } from "react-jss";
import { primaryColor } from "../../utils";

export const useClockStyles = createUseStyles({
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
        width: "80%",
        height: "55%",
        background: "linear-gradient(0deg, transparent 50%, white 50%)",
    },
    clockMinutePointer: {
        width: "45%",
        height: "75%",
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
