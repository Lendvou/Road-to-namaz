import { createUseStyles } from "react-jss";

export const useInstallButtonStyles = createUseStyles({
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
});
