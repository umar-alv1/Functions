
//01.  write a program to check the max and min number between four numbers




function maxNumber(num1:number, num2:number, num3:number, num4:number){
    if(num1>num2 && num1>num3 && num1>num4){
    console.log("num1 is amax number",num1);
    return num1 
         }
    else if(num2>num1 && num2>num3 && num2>num4){
        console.log("num2 is a max number",num2);
        return num2 
         }
        else if(num3>num1 && num3>num2 && num3>num4){
            console.log("num3 is a maxx number",num3);
            return num3
        }
        else {
            console.log("num4 is a max number",num4);
            return num4
        }
}

maxNumber(6,4,9,8)


function minNumber(num1:number, num2:number, num3:number, num4:number){
    if(num1<num2 && num1<num3 && num1<num4){
        console.log("num1 is min number",num1);
        return num1 
             }
        else if(num2<num1 && num2<num3 && num2<num4){
            console.log("num2 is a min number",num2);
            return num2 
             }
            else if(num3<num1 && num3<num2 && num3<num4){
                console.log("num3 is a min number",num3);
                return num3
            }
            else {
                console.log("num4 is a min number",num4);
                return num4
            }
}

minNumber(45,56,73,54)


//02.  write a program to check the number is even or odd


function number(num:number){
    if(num%2==0){
        console.log("num is even",num);
        return num
    }
    else{
        console.log("num is odd",num);
        return num
    }
}
number(6)



//03.  write a program to check the number is divisible by 5,11 or not



function divisibleNumber(num:number){
    if(num%5==0){
        console.log("number is divisible by 5",num);
        return num
    }
    else if(num%11==0){
        console.log("number is divisible by 11",num);
        return num 
    }
    else{
        console.log("number is not divisible on both",num);
        return num
    }
}
divisibleNumber(17)