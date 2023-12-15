import { useInstallButtonStyles } from "./styles";
import { useEffect, useState } from "react";

interface IInstallButtonProps {
    isDisabled?: boolean;
}

export const InstallButton: React.FC<IInstallButtonProps> = ({
    isDisabled = false,
}) => {
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
            disabled={isDisabled}
            className={styles.installButton}
            onClick={() => (installEvent as any).prompt()}
        >
            Install
        </button>
    ) : null;
};
