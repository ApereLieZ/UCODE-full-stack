String.prototype.removeDuplicates = function removeDuplicates(){
    let strArr = this.replace(/\s+/g, ' ').trim().split(" ");
    strArr = strArr.filter((c, index) => {
        return strArr.indexOf(c) === index;
    })
    return strArr.join(" ");
}