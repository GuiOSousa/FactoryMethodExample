import { Shape } from "./shape";

export interface Creator {
    create(lenght: number): Shape
}