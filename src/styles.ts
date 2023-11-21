import { createUseStyles } from "react-jss";
import { bgColor } from "./utils";

export const useStyles = createUseStyles({
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
});
