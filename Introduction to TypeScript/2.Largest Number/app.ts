function printLargestNumber(num1:number,num2:number,num3:number):void{
    if(num1 > num2 && num1 > num3){
        return console.log(`The largest number is ${num1}.`)
    }else if (num2 > num1 && num2 > num3){
        return console.log(`The largest number is ${num2}.`)
    }else{
        return console.log(`The largest number is ${num3}.`)
    }
}

printLargestNumber(-3, -5, -22.5)