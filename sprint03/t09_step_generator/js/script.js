function* generator(){
    let index = 1;
    yield index;
    while(true){
        let i =Number(prompt(`Previous resulr: ${index}. Enter a new number`));
        if (isNaN(i)) {
            console.error("Invalit number!")
            continue
        }
        if(index + i > 10000)
            index = 1;
        yield index += i;
    }
}

let gen = generator();

while(true){
    gen.next();
}