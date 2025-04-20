import {describe, it, expect} from 'vitest';
import {CustomDate} from "~/models/PeriodDates";
import {getPeriodDates} from "~/composables/usePeriod";

describe('usePeriod', () => {
    it('for weeks, should return the correct period', () => {
        // Arrange
        const expectedStartDate = new CustomDate();
        expectedStartDate.setDate(expectedStartDate.getDate() - expectedStartDate.getDay());
        const expectedEndDate = new CustomDate();
        expectedEndDate.setDate(expectedEndDate.getDate() + (7 - expectedEndDate.getDay()));

        // Act
        const period = getPeriodDates(new CustomDate(), 'week', true);

        // Assert
        expect(dateComparer(period.firstDay, expectedStartDate)).toBe(true);
        expect(dateComparer(period.lastDay, expectedEndDate)).toBe(true);
    });

    it('for weeks, should return the correct period (relative)', () => {
        // Arrange
        const expectedStartDate = new CustomDate();
        expectedStartDate.setDate(expectedStartDate.getDate() - 7);
        const expectedEndDate = new CustomDate();

        // Act
        const period = getPeriodDates(new CustomDate(), 'week', false);

        // Assert
        expect(dateComparer(period.firstDay, expectedStartDate)).toBe(true);
        expect(dateComparer(period.lastDay, expectedEndDate)).toBe(true);
    });

   // for months
    it('for months, should return the correct period', () => {
        // Arrange
        const expectedStartDate = new CustomDate();
        expectedStartDate.setDate(1);
        const expectedEndDate = new CustomDate(new Date().getFullYear(),expectedStartDate.getMonth() + 1, 0);

        // Act
        const period = getPeriodDates(new CustomDate(), 'month', true);

        // Assert
        expect(dateComparer(period.firstDay, expectedStartDate)).toBe(true);
        expect(dateComparer(period.lastDay, expectedEndDate)).toBe(true);
    });

    // for months
    it('for months, should return the correct period (relative)', () => {
        // Arrange
        const expectedStartDate = new CustomDate();
        expectedStartDate.setMonth(expectedStartDate.getMonth() - 1);
        const expectedEndDate = new CustomDate();

        // Act
        const period = getPeriodDates(new CustomDate(), 'month', false);

        // Assert
        expect(dateComparer(period.firstDay, expectedStartDate)).toBe(true);
        expect(dateComparer(period.lastDay, expectedEndDate)).toBe(true);
    });

    // for year
    it('for year, should return the correct period', () => {
        // Arrange
        const expectedStartDate = new CustomDate(new Date().getFullYear(), 0, 1);
        expectedStartDate.setDate(1);
        const expectedEndDate = new CustomDate(new Date().getFullYear(),12, 0);

        // Act
        const period = getPeriodDates(new CustomDate(), 'year', true);

        // Assert
        expect(dateComparer(period.firstDay, expectedStartDate)).toBe(true);
        expect(dateComparer(period.lastDay, expectedEndDate)).toBe(true);
    });

    // for year
    it('for year, should return the correct period (relative)', () => {
        // Arrange
        const expectedStartDate = new CustomDate();
        expectedStartDate.setFullYear(expectedStartDate.getFullYear() - 1);
        const expectedEndDate = new CustomDate();

        // Act
        const period = getPeriodDates(new CustomDate(), 'year', false);

        // Assert
        expect(dateComparer(period.firstDay, expectedStartDate)).toBe(true);
        expect(dateComparer(period.lastDay, expectedEndDate)).toBe(true);
    });
});

function dateComparer(dateA: CustomDate, dateB: Date): boolean {
    // Only compare the date part, ignoring time
    const dateAWithoutTime = new CustomDate(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
    const dateBWithoutTime = new CustomDate(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

    // Compare the two dates
    if (dateAWithoutTime.getTime() !== dateBWithoutTime.getTime()) {
        return false;
    }
    return true;
}
