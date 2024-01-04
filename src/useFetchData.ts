import { useEffect, useState } from "react";
import { IOffsets, getTuneString, transformDate } from "./utils";

export interface ITimings {
    [key: string]: {
        hours: number;
        minutes: number;
    };
}
export interface IDate {
    day?: number;
    weekday?: string;
    month?: string;
}

interface IFetchData {
    timings: ITimings;
    currentDate: IDate;
}

interface IUseFetchDataOptions {
    offsets: IOffsets;
}

export const useFetchData = ({ offsets }: IUseFetchDataOptions) => {
    const [fetchData, setFetchData] = useState<IFetchData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const tuneString = getTuneString(offsets);

            try {
                const date = new Date();
                const { data } = await (
                    await fetch(
                        `https://api.aladhan.com/v1/timingsByAddress/${date.getDay()}-${
                            date.getMonth() + 1
                        }-${date.getFullYear()}?address=Makhachkala,RU&method=8&tune=${tuneString}`
                    )
                ).json();
                const timings = {
                    Fajr: transformDate(data.timings.Fajr),
                    Dhuhr: transformDate(data.timings.Dhuhr),
                    Asr: transformDate(data.timings.Asr),
                    Maghrib: transformDate(data.timings.Maghrib),
                    Isha: transformDate(data.timings.Isha),
                };
                const currentDate: IDate = {
                    day: Number(data.date.gregorian.day),
                    month: data.date.gregorian.month.en,
                    weekday: data.date.gregorian.weekday.en,
                };
                setFetchData({ timings, currentDate });
                setError("");
            } catch (e: any) {
                setError(e.message);
            }

            setIsLoading(false);
        };
        fetchData();
    }, [offsets]);

    return {
        data: fetchData,
        isLoading,
        error,
    };
};
