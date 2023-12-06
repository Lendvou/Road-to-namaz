import { useInstallButtonStyles } from "./styles";
import { useEffect, useState } from "react";

export const InstallButton = () => {
    const [installEvent, setInstallEvent] = useState<Event | null>(null);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            setInstallEvent(e);
        });
        window.addEventListener("appinstalled", () => {
            setInstallEvent(null);
        });
    }, []);

    const styles = useInstallButtonStyles();

    return installEvent &&
        !window.matchMedia("(display-mode: standalone)").matches ? (
        <button
            className={styles.installButton}
            onClick={() => (installEvent as any).prompt()}
        >
            Install
        </button>
    ) : null;
};
