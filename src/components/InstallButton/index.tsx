import { useInstallButtonStyles } from "./styles";

interface IInstallButtonProps {
    installEvent: Event | null;
}

export const InstallButton: React.FC<IInstallButtonProps> = ({
    installEvent,
}) => {
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
