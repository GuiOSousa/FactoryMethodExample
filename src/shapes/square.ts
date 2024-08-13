import { Shape } from "../shape";

export class Square implements Shape{
    constructor(
        public side: number
    ){}

    calculateArea(): number {
        return this.side * this.side
    }
}