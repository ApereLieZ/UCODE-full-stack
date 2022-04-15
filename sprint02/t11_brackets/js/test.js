describe("Correct data", function() {
    it("Check if ok ", function(){
        assert.equal(checkBrackets("()()"), 0);
    });
    it("Check numbers ", function(){
        assert.equal(checkBrackets("1212"), -1);
    });
    it("no scobla ", function(){
        assert.equal(checkBrackets("asdasd"), -1);
    });
    it("2 scoba ", function(){
        assert.equal(checkBrackets("(("), 2);
    });
    it("2 under scoba ", function(){
        assert.equal(checkBrackets("))"), 2);
    });
    it("Random sheat ", function(){
        assert.equal(checkBrackets("(()())(()()))))"), 3);
    });
    it("Random sheat with chars ", function(){
        assert.equal(checkBrackets("((asdasd))))"), 2);
    });
    it("with numbers", function(){
        assert.equal(checkBrackets("))(("), 4);
    });
    it("hard test1 ", function(){
        assert.equal(checkBrackets("(())"), 0);
    });
    it("hard test2 ", function(){
        assert.equal(checkBrackets("1)()(())2(()"), 2);
    });

});

describe("Incorrect data", function() {
    it("no scobla ", function(){
        assert.equal(checkBrackets(123), -1);
    });
    it("2 scoba ", function(){
        assert.equal(checkBrackets(Object), -1);
    });
    it("2 under scoba ", function(){
        assert.equal(checkBrackets(null), -1);
    });
    it("Random sheat ", function(){
        assert.equal(checkBrackets("asd"), -1);
    });
    it("Random sheat with chars ", function(){
        assert.equal(checkBrackets("}}{{"), -1);
    });

});