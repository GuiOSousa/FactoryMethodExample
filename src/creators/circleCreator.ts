import { Creator } from "../creator";
import { Circle } from "../shapes/circle";

export class CircleCreator implements Creator{
    create(lenght: number): Circle {
        return new Circle(lenght)
    }
}