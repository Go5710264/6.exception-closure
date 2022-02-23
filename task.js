// Задача 1

function parseCount(parse) {
    let numberPerLine = Number.parseInt(parse);
    if(Number.isNaN(numberPerLine)) {
        throw new Error('Невалидное значение');
    }
    return numberPerLine;
}

function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch (err) {
        return err;
    }
}

// Задача 2

class Triangle{
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideC + sideA) < sideB) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter(){
        try {
            return this.sideA + this.sideB + this.sideC;
        } catch (err) {
            throw Error;  
        }
    }

    getArea(){
        let semiPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));   
        return +area.toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (err) {
        newTriangle3.getArea()
        this.getPerimeter();
    }
}