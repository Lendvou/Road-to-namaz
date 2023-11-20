import { createUseStyles } from "react-jss";
import { bgColor, primaryColor } from "../../utils";
// import { primaryColor } from "../../utils";

export const useModalStyles = createUseStyles({
    settingsButton: {
        position: "absolute",
        top: "2%",
        right: "4%",
        width: "24px",
        cursor: "pointer",
    },
    modal: {
        // borderRadius: 4,
        backgroundColor: bgColor,
        color: "white",
        width: "80%",
        borderRadius: 4,
    },
    closeButton: {
        marginTop: 8,
        outline: 0,
        border: "none",
        "& svg": {
            fill: "white",
        },
        "&:focus": {
            outline: 0,
        },
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: "1.4rem",
        marginBottom: 28,
    },
    info: {
        fontSize: "0.8rem",
        marginBottom: 16,
    },
    content: {
        marginBottom: 20,
    },
    settingsItem: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
        // paddingRight: "40%",
    },
    settingsItemRight: {
        marginLeft: "auto",
        display: "inline-flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    currentOffset: {
        fontSize: "0.7rem",
        marginRight: 6,
    },
    settingsInput: {
        width: 60,
        fontFamily: "Montserrat-semibold",
        borderRadius: 4,
        outline: 0,
        border: "none",
        backgroundColor: "white",
        padding: "5px 8px",
    },
    saveButton: {
        fontFamily: "Montserrat-semibold",
        textTransform: "uppercase",
        color: primaryColor,
        alignSelf: "end",
    },
});
