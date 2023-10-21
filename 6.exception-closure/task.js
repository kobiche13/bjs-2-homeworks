function parseCount(parseValue){
    let result = Number.parseFloat(parseValue);
    if(isNaN(result)){
       throw new Error('Невалидное значение');
    } else{
        return result;
    }
}

function validateCount(parseValue){
    try{
        return parseCount(parseValue);
    } catch(error){
        return error;
    }
}

class Triangle { 
    
	constructor(a,b,c) {
        
        this.a = a;
        this.b = b;
        this.c = c;
        
        
        if(this.a + this.b < this.c || this.c + this.b < this.a || this.c + this.a < this.b){
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    
    get perimeter(){
        return this.a + this.b + this.c;
    }
    
    get area(){
        const halfPerimetr = this.perimeter / 2;
        return Number(Math.sqrt(halfPerimetr * ((halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle (a, b, c);
    } catch {
        return {
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area(){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}


