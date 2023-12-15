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
    errorMessage: {
        color: "red",
    },
});
