import { Shape } from "../shape";

export class EqTriangle implements Shape{
    constructor(
        public side: number
    ){}

    calculateArea(): number {
        return (this.side * this.side)/2
    }  
}