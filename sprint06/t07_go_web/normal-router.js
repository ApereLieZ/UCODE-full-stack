function calculateTime() {
    let date = new Date(1939, 1, 1)
    let now = new Date()
    let deltaDate = new Date();
    deltaDate.years = () => { return now.getFullYear() - date.getFullYear() }
    deltaDate.months = () => { return now.getMonth() - date.getMonth() }
    deltaDate.days = () => { return now.getDate() - date.getDate() }

    return deltaDate;
}

module.exports.calculateTime = calculateTime