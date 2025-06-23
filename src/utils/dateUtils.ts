export function formatISODate(datetime: Date): string {
    const day = datetime.getDate()
    const month = datetime.getMonth() + 1
    const year = datetime.getFullYear()

    const date = (month < 10 ? '0' : '') + month + "/" + (day < 10 ? '0' : '') + day + "/"  + year
    const time = getTime(datetime)
    return date + ", " + time
}

export function getTime(datetime: Date): string {
    return getHours(datetime) + ':' + getMinutes(datetime)
}

function getHours(datetime: Date): string {
    return (datetime.getHours() < 10 ? '0' : '') + datetime.getHours()
}

function getMinutes(datetime: Date): string {
    return (datetime.getMinutes() < 10 ? '0' : '') + datetime.getMinutes()
}