import { createUseStyles } from "react-jss";
import { primaryColor } from "../../utils";

export const useTimeStyles = createUseStyles({
    time: {
        fontSize: "2.8rem",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        fontFamily: "Montserrat-semibold",
        "@media (min-width: 576px)": {
            fontSize: "3.5rem",
        },
    },
    timeValue: {
        display: "flex",
        justifyContent: "space-around",
    },
    seconds: {
        color: primaryColor,
    },
    digit: {
        width: "2.3rem",
        display: "flex",
        justifyContent: "center",
        "@media (min-width: 576px)": {
            width: "2.8rem",
        },
    },
    colon: {
        margin: "0 4px",
        paddingBottom: "0.3rem",
    },
});
