let houseMixin = {
    wordReplace(item, replacer){
        this.description = this.description.replace(item, replacer);   
    },
    wordInsertAfter(item, additem){
        let index = this.description.indexOf(item);
        if(index < -1){
            return;
        }
        let len = index + item.length;

        this.description = [this.description.slice(0, len), " ", additem, this.description.slice(len)].join('');
    },
    wordDelete(del){
        this.description = this.description.replace(del, "");
    },

    wordEncrypt () {
        const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        this.description = this.description.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)]);
    },
    wordDecrypt(){
        const originalAlpha = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        const cipher =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.description = this.description.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)]);
    }
}