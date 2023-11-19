import { useLoadertyles } from "./styles";

export const Loader = () => {
    const styles = useLoadertyles();
    return <div className={styles.loader} />;
};
