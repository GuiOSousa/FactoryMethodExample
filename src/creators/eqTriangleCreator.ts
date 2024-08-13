import { Creator } from "../creator";
import { EqTriangle } from "../shapes/eqTriangle";

export class EqTriangleCreator implements Creator {
    create(lenght: number): EqTriangle {
        return new EqTriangle(lenght)
    }
}