function total(addCount, addPrice, currentTotal = 0){
    if(addCount == 0)
        return currentTotal;
    return currentTotal + (addCount * addPrice);
}
