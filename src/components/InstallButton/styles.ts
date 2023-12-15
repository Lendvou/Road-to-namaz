import { createUseStyles } from "react-jss";
import { secondaryColor } from "../../utils";

export const useInstallButtonStyles = createUseStyles({
    installButton: {
        textTransform: "uppercase",
        color: "white",
        position: "absolute",
        left: "4%",
        top: "2%",
        fontFamily: "Montserrat-semibold",
        fontSize: "0.8rem",
        outline: 0,
        borderRadius: 4,
        padding: "7px 16px",
        border: "none",
        backgroundColor: secondaryColor,
        cursor: "pointer",
        transition: "0.2s",

        "&:hover": {
            opacity: 0.8,
        },
        "&[disabled]": {
            opacity: 0.6,
            cursor: "default",
        },
    },
});
