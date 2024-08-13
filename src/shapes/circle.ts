import { Shape } from "../shape";

export class Circle implements Shape {
    constructor(
        public radius: number
    ){}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }
}