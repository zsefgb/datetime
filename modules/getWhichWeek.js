export default function getWhichWeek(date, startDay, dateUnit) {
    const baseDate = date.getDate();
    const firstDay = new Date(date.setDate(1)).getDay();
    let week = Math.ceil((baseDate + firstDay) / 7);
    if (firstDay > 3) week--;

    return week;
}
