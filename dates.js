let date1 = new Date("2023-03-10")
let date2 = new Date("2023-03-20")
let diff = date2 - date1
let xStickDates = []

const options1 = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
};
const options2 = {
    hour: "2-digit",
    minute: "2-digit"
}
const options3 = {
    weekday: "long"
};

dates = () => {
    console.log(diff)
    for (i = date1.getTime() - 3600000; i <= date2.getTime(); i += 21600000) {
        newDate = new Date(i)
        xStickDates.push([
            newDate.toLocaleString('hu-HU', options1).replaceAll(' ', ''),
            newDate.toLocaleTimeString('hu-HU', options2),
            newDate.toLocaleString('hu-HU', options3)
        ])
    }
    console.log(xStickDates)
}
