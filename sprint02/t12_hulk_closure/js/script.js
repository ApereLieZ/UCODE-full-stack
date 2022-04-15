function concat(...args) {
    
    addWord.count = 0;
    function addWord() {
        let str = prompt("Input seccond word: ", "");
        if (str === undefined || str === null){
            return args[0];
        }
        addWord.count++;
        return args[0].concat(" ", str);
    }
    

    if (arguments.length == 1)
        return addWord;
    if (arguments.length == 2) 
        return args[0].concat(" ", args[1]);
}
