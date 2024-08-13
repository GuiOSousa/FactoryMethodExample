import { CircleCreator } from "./creators/circleCreator";
import { EqTriangleCreator } from "./creators/eqTriangleCreator";
import { SquareCreator } from "./creators/squareCreator";

export default class Facade {
    constructor() {}

    create(shapeType: string, lenght: number) {
        if (shapeType == "circle") {
            const creator = new CircleCreator
            return creator.create(lenght)
        }
        else if (shapeType == "square") {
            const creator = new SquareCreator
            return creator.create(lenght)
        }
        else if (shapeType == "triangle") {
            const creator = new EqTriangleCreator
            return creator.create(lenght)
        }
        throw new Error("Invalid shape.")
    }
}