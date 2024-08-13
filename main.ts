import Facade from "./src/facade";

function main(){
    const facade = new Facade
    const circle = facade.create("circle", 10)
    const square = facade.create("square", 10)
    const triangle = facade.create("triangle", 10)

    console.log(circle.calculateArea())
    console.log(square.calculateArea())
    console.log(triangle.calculateArea())
}

main()