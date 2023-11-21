import { createUseStyles } from "react-jss";
import { primaryColor } from "../../utils";

export const useLoadertyles = createUseStyles({
    loader: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        position: "relative",
        animation: "rotate 1s linear infinite",
        "&:before": {
            content: '""',
            boxSizing: "border-box",
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: `5px solid ${primaryColor}`,
            animation: "prixClipFix 2s linear infinite",
        },
    },
});
