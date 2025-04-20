import {CustomDate, PeriodDates} from "~/models/PeriodDates";

export const getPeriodDates = (date?: CustomDate, period?: string, absolute?: boolean): PeriodDates => {
    if (date === undefined) {
        date = new CustomDate();
    }
    if (period === undefined) {
        period = 'month';
    }
    if (absolute === undefined) {
        absolute = false;
    }

    switch (period) {
        case 'day':
            return new PeriodDates(date, date);
        case 'week':
            return absolute
                ? new PeriodDates(getFirstDayOfWeek(date), getLastDayOfWeek(date))
                : new PeriodDates(getRelativeStartDayWeek(date), new CustomDate());

        case 'month':
            return absolute
                ? new PeriodDates(getFirstDayOfMonth(date), getLastDayOfMonth(date))
                : new PeriodDates(getRelativeStartDayMonth(date), new CustomDate());

        case 'year':
            return absolute
            ? new PeriodDates(getFirstDayOfYear(date), getLastDayOfYear(date))
            : new PeriodDates(getRelativeStartDayYear(date), new CustomDate());

        default:
            throw new Error('Invalid period');
    }

}

function getFirstDayOfMonth(date: CustomDate): CustomDate {
    return new CustomDate(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfMonth(date: CustomDate): CustomDate {
    return new CustomDate(date.getFullYear(), date.getMonth() + 1, 0);
}

function getFirstDayOfYear(date: CustomDate): CustomDate {
    return new CustomDate(date.getFullYear(), 0, 1);
}

function getLastDayOfYear(date: CustomDate): CustomDate {
    return new CustomDate(date.getFullYear(), 11, 31);
}

function getFirstDayOfWeek(date: CustomDate): CustomDate {
    const firstDay = new CustomDate(date);
    firstDay.setDate(date.getDate() - date.getDay());
    return firstDay;
}

function getLastDayOfWeek(date: CustomDate): CustomDate {
    const lastDay = new CustomDate(date);
    lastDay.setDate(date.getDate() + (7 - date.getDay()));
    return lastDay;
}

function getRelativeStartDayWeek(date: CustomDate): CustomDate {
    const startDay = new CustomDate(date);
    startDay.setDate(date.getDate() - 7);
    return startDay;
}

function getRelativeStartDayMonth(date: CustomDate): CustomDate {
    const startDay = new CustomDate(date);
    startDay.setMonth(date.getMonth() - 1);
    return startDay;
}

function getRelativeStartDayYear(date: CustomDate): CustomDate {
    const startDay = new CustomDate(date);
    startDay.setFullYear(date.getFullYear() - 1);
    return startDay;
}
