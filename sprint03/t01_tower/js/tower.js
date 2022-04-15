class Tower extends Building{
    constructor(...args){
        super(...args);
        this.hasElevator = null;
        this.arcCapacity = null;
        this.height = null;
    }
    toString(){
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator?'+':'-'}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}\n`,
            ].join('\n');
    }
    getFloorHeight(){
        return this.height / this.floors;
    }
}