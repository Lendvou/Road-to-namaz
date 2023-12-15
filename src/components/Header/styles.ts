import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
    currentDay: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "6rem",
        marginTop: "1rem",
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
