export class PeriodDates {
    firstDay: CustomDate;
    lastDay: CustomDate;

    constructor(firstDay: CustomDate, lastDay: CustomDate) {
        this.firstDay = firstDay;
        this.lastDay = lastDay;
    }
}

export class CustomDate extends Date {
    getDateString(): string {
        // Note: String.prototype.padStart() is used to ensure two-digit formatting for month and day
        const day = String(this.getDate()).padStart(2, '0');
        const month = String(this.getMonth() + 1).padStart(2, '0');
        const year = String(this.getFullYear());
        return `${year}-${month}-${day}`;
    }
}
