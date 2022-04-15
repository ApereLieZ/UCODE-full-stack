function calculateTime() {
    let date = new Date(1939, 1, 1)
    let now = new Date()

    let delta = (Math.abs(date) + Number(now)) / 7
    let quantumDate = new Date(Number(date) + Number(delta))

    let result = new Array();
    result.push(quantumDate.getFullYear() - date.getFullYear())
    result.push(quantumDate.getMonth() - date.getMonth())
    result.push(quantumDate.getDate() - date.getDate())
    return result;
}

module.exports.calculateTime = calculateTime