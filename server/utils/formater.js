module.exports = {
    format_date: date => {
        const month = new Date(date).getMonth() + 1
        const day = new Date(date).getDate()
        const year = new Date(date).getFullYear()
        let hours = new Date(date).getHours()
        const ampm = hours >= 12 ? "pm" : "am"
        hours = new Date(date.getHours() + 24) % 12 || 12
        let minutes = String(new Date(date).getMinutes()).padStart(2, "0")


        return `${month}/${day}/${year}   ${hours}:${minutes}${ampm}`

    }
}