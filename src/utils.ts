export const transformDate = (str: string) => ({
    hours: +str.split(":")[0],
    minutes: +str.split(":")[1],
});

export const formatDate = (hours: number, minutes: number) => {
    const fHours = hours < 10 ? `0${hours}` : hours;
    const fMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${fHours}:${fMinutes}`;
};

export const getHoursPosition = (hours: number, minutes: number): number => {
    hours = hours > 12 ? hours - 12 : hours;
    return hours * 30 + minutes * 0.5;
};

export interface IOffsets {
    [key: string]: string;
}

export const defaultOffsets: IOffsets = {
    Fajr: "0",
    Dhuhr: "0",
    Asr: "0",
    Maghrib: "0",
    Isha: "0",
};
export const getOffsetsFromStorage = () => {
    const result = localStorage.getItem("offsets");
    return result ? JSON.parse(result) : defaultOffsets;
};
export const saveOffsetsToStorage = (offsets: IOffsets) => {
    localStorage.setItem("offsets", JSON.stringify(offsets));
};
export const getTuneString = (offsets: IOffsets) => {
    const Fajr = 12 + (Number(offsets.Fajr) || 0);
    const Dhuhr = 4 + (Number(offsets.Dhuhr) || 0);
    const Asr = 1 + (Number(offsets.Asr) || 0);
    const Maghrib = 5 + (Number(offsets.Maghrib) || 0);
    const Isha = -7 + (Number(offsets.Isha) || 0);

    return `8,${Fajr},-2,${Dhuhr},${Asr},${Maghrib},0,${Isha},-3`;
};

export const primaryColor = "#00B489";
// export const primaryColor = "#CD201F";
export const bgColor = "#1B1B1F";
