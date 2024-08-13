import { Creator } from "../creator";
import { Square } from "../shapes/square";

export class SquareCreator implements Creator{
    create(lenght: number): Square {
        return new Square(lenght)
    }
}