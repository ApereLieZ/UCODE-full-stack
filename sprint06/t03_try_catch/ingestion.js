class Ingestion{
    constructor(mealType, id){
        this.id = id;
        this.mealType = mealType;
        this.products = [];
        this.day_of_diet = 0;
    }

    setProduct(o){
        this.products.push(o);
    }

    getFromFridge(product) {
        for (let p of this.products){
            if (p.name === product) {
                try {
                    p.check()
                } catch (e) {
                    e.message = `To many calories in ${product} for ${this.mealType}`
                    throw e
                }
            }
        }
    }
    getProductInfo(product) {
        let result = {}
        for (let p of this.products) {
            if (p.name === product) {
                result.kcal = p.kcal_per_portion
                return result
            }
        }
    }

}

module.exports.Ingestion = Ingestion