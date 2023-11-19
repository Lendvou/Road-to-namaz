export const transformDate = (str: string) => ({
    hours: +str.split(":")[0],
    minutes: +str.split(":")[1],
});

export const formatDate = (hours: number, minutes: number) => {
    const fHours = hours < 10 ? `0${hours}` : hours;
    const fMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${fHours}:${fMinutes}`;
};

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export const mockdata = {
    Fajr: {
        hours: 5,
        minutes: 10,
    },
    Dhuhr: {
        hours: 11,
        minutes: 40,
    },
    Asr: {
        hours: 14,
        minutes: 5,
    },
    Maghrib: {
        hours: 16,
        minutes: 29,
    },
    Isha: {
        hours: 17,
        minutes: 46,
    },
};

export const primaryColor = "#00B489";
// export const primaryColor = "#CD201F";

export interface IOffsets {
    [key: string]: number;
}

export const initialOffsets: IOffsets = {
    Fajr: 0,
    Dhuhr: 0,
    Asr: 0,
    Maghrib: 0,
    Isha: 0,
};
