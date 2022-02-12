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
        if ((this.sideA + this.sideB) < this.sideC || (this.sideB + this.sideC) < this.sideA || (this.sideC + this.sideA) < this.sideB) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter(){
        return this.sideA + this.sideB + this.sideC;
    }

    getArea(){
        let semiPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));   
        return area.toFixed(3);
    }
}
function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (err) {
        return [getArea(), getPerimeter()]
    }
}