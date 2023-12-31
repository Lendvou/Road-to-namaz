import settingsLogo from "../../assets/images/settings.svg";
import { useModalStyles } from "./styles";
import Modal from "react-responsive-modal";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { IOffsets } from "../../utils";

interface ISettingsModalProps {
    offsets: IOffsets;
    onSave: (newOffsets: IOffsets) => void;
}

export const SettingsModal: React.FC<ISettingsModalProps> = ({
    offsets,
    onSave,
}) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [inputValues, setInputValues] = useState<IOffsets>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues((v) => ({
            ...v,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClose = () => {
        setIsModalOpened(false);
        setInputValues({});
    };
    const handleSave = () => {
        const valuesToChange = Object.entries(inputValues).reduce(
            (obj, [key, value]) => {
                if (value !== "") obj[key] = value;
                return obj;
            },
            {} as IOffsets
        );
        if (
            Object.values(valuesToChange).some(
                (val) => isNaN(Number(val)) || String(val).includes(".")
            )
        ) {
            alert("Incorrect input values");
            return;
        }

        const transformedData = {
            ...offsets,
            ...valuesToChange,
        };
        onSave(transformedData);
        handleClose();
    };

    const styles = useModalStyles();
    return (
        <>
            <img
                src={settingsLogo}
                alt="s"
                className={styles.settingsButton}
                onClick={() => setIsModalOpened(true)}
            />
            <Modal
                open={isModalOpened}
                center
                classNames={{
                    modal: styles.modal,
                    closeButton: styles.closeButton,
                }}
                focusTrapped={false}
                onClose={handleClose}
            >
                <div className={styles.wrapper}>
                    <div className={styles.title}>Settings</div>

                    <div className={styles.info}>Offset timings:</div>

                    <div className={styles.content}>
                        {Object.keys(offsets).map((key) => (
                            <div key={key} className={styles.settingsItem}>
                                <span className={styles.settingsNamazName}>
                                    {key}
                                </span>
                                <div className={styles.settingsItemRight}>
                                    <input
                                        type="number"
                                        name={key}
                                        autoFocus={false}
                                        className={styles.settingsInput}
                                        onChange={handleInputChange}
                                    />
                                    <span className={styles.currentOffset}>
                                        Current: {offsets[key]}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={styles.saveButton} onClick={handleSave}>
                        Save
                    </button>
                </div>
            </Modal>
        </>
    );
};
