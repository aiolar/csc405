var dp1 =""
var dp2 = ""
var number = [];
pressButton = addition = multiply = divide = minus = mod = npower = root = false;

function putNum(e) {
    pressButton = true;
    if((document.getElementById("disp2").value == "0" || document.getElementById("disp2").value == "")  && e == "."){
        dp2 = "0."
    }else if(document.getElementById("disp2").value != "0" && e == "."){
        if(dp2.includes(".")){ dp2 = dp2;}
        else{
            dp2 += e;
        }
    }else if((document.getElementById("disp2").value == "0" || document.getElementById("disp2").value == "") && e == "0"){
        dp2 = ""
    }
    else{
        dp2 += e
    }

    document.getElementById("disp2").value = dp2;


};

function putSign (e) {
    console.log(number);


    if(pressButton){
       if(number[1] == undefined){
           number.push(parseFloat(dp2))
       }
       else{
           number[1] = parseFloat(dp2);
       }

       if(addition){
            number[0] = number[0] + number[1];
            document.getElementById("disp2").value = number[0] ;
            addition = false;
       }else if(multiply){
            number[0] = number[0] * number[1];
            document.getElementById("disp2").value = number[0] ;
            multiply = false;
       }else if(divide){
            number[0] = number[0] / number[1];
            document.getElementById("disp2").value = number[0] ;
            divide = false;
       }else if(minus){
            number[0] = number[0] - number[1];
            document.getElementById("disp2").value = number[0] ;
            minus = false;
        }else if(mod){
            number[0] = number[0] % number[1];
            document.getElementById("disp2").value = number[0] ;
            mod = false;
        }else if(npower){
            number[0] = Math.pow(number[0], number[1]);
            document.getElementById("disp2").value = number[0] ;
            npower = false;
        }else if(root){
            number[0] = Math.pow(number[0], 1/number[1]);
            document.getElementById("disp2").value = number[0] ;
            root = false;
        }

        dp1 = dp1 + " "+ dp2 + " "+ e;
        pressButton = false;
        dp2 ="";
        if(e == "="){
            dp1 = "";
            dp2 = number[0];
            number.pop();
            number.pop();
            pressButton = true
        }
        document.getElementById("disp1").value = dp1;
    }else{
        if( document.getElementById("disp1").value != ""){
        dp1 = dp1.slice(0, dp1.length-1);
        dp1 += e
        document.getElementById("disp1").value = dp1;
        }

    }
    switch(e){
        case "+":
            addition = true;
            multiply = divide = minus = false;
            break;
        case "*":
            multiply = true;
            addition = divide = minus = false;
            break;
        case "÷":
            divide = true;
            addition = multiply = minus = false;
            break;
        case "-":
            minus = true;
            addition = multiply = divide = false;
            break;
        case "Mod":
            mod = true;
            minus = addition = multiply = divide = false;
        case "^":
            npower = true;
            mod = minus = addition = multiply = divide = false;
        case "root":
            root = true;
            npower = mod = minus = addition = multiply = divide = false;
    }
};

clearDisplay = () =>{
    document.getElementById("disp2").value = 0;
    dp2 = "";

}
clearBoth = () =>{
    location.reload();
}

backSpace = () => {
    dp2 = dp2.slice(0, dp2.length-1)
    if(dp2.length == 0){
        dp2 = 0;
    }
    document.getElementById("disp2").value = dp2;
}

var angle = document.getElementById("Deg");

changeAngle = (e) => {
    if(e == "Deg"){
        angle.id = "Rad";
        angle.value = "Rad";
    }else{
        angle.id = "Deg";
        angle.value = "Deg";
    }

}

function convertAngle(number){
    if(angle.id == "Deg"){
        return (number *(Math.PI/180));
    }else{
        return number;
    }
}
sciCal =(e) =>{
    if(dp2 == ""){
        dp2 = 0
    }

    switch(e){
        case "sin":
            if( dp1 == ""){
                dp1 = `sin(${dp2})`;
            }else{ dp1 = `sin(${dp1})`; }
            dp2 = Math.sin(convertAngle(dp2));
            break;
        case "cos":
            if( dp1 == ""){
                dp1 = `cos(${dp2})`;
            }else{ dp1 = `cos(${dp1})`; }
            dp2 = Math.cos(convertAngle(dp2));
            break;
        case "tan":
            if( dp1 == ""){
                dp1 = `tan(${dp2})`;
            }else{ dp1 = `tan(${dp1})`; }
            dp2 = Math.tan(convertAngle(dp2));
            break;
        case "asin":
            if( dp1 == ""){
                dp1 = `asin(${dp2})`;
            }else{ dp1 = `asin(${dp1})`; }

            if(angle.id == "Deg"){
                dp2 = Math.asin(dp2) *(180/Math.PI);
            }else{
                dp2 = Math.asin(dp2);
            }

            break;
        case "acos":
            if( dp1 == ""){
                dp1 = `acos(${dp2})`;
            }else{ dp1 = `acos(${dp1})`; }

            if(angle.id == "Deg"){
                dp2 = Math.acos(dp2) *(180/Math.PI);
            }else{
                dp2 = Math.acos(dp2);
            }

            break;
        case "atan":
            if( dp1 == ""){
                dp1 = `atan(${dp2})`;
            }else{ dp1 = `atan(${dp1})`; }

            if(angle.id == "Deg"){
                dp2 = Math.atan(dp2) *(180/Math.PI);
            }else{
                dp2 = Math.atan(dp2);
            }

            break;
        case "plusminus":
            dp2 *= -1
            break;
        case "sqrt":
            dp1 = `sqrt(${dp2})`
            dp2 = Math.sqrt(dp2);
            break;
        case "sqr":
            dp1 = `sqr(${dp2})`
            dp2 = Math.pow(dp2, 2);
            break;
        case "pi":
            dp2 = Math.PI;
            pressButton = true;
            break;
        case "powerten" :
            dp1 = `powten(${dp2})`
            dp2 = Math.pow(10, dp2);
            break
        case "powerexpo" :
            dp1 = `powe(${dp2})`
            dp2 = Math.pow(Math.E, dp2);
            break;
        case "percnt" :
            dp1 = `percnt(${dp2})`
            dp2 = dp2/100;
            break;
        case "permil":
            dp1 = `permil(${dp2})`
            dp2 = dp2/1000;
            break;
        case "log":
            dp1 = `log(${dp2})`
            dp2 = Math.log10(dp2);
            break;
        case "ln" :
            dp1 = `ln(${dp2})`
            dp2 = Math.log(dp2);
            break;
        case "inverse":
            dp1 = `reciproc(${dp2})`
            dp2 = 1/dp2;
            break;
        case "fact":
            dp1 = `fact(${dp2})`
            dp2=(factorial = (x) => {
                    var number = 1
                    for(i = 1; i <= x ; i++){
                        number *= i;
                    }
                    if( x < 0){
                        return "Invalid input"
                    }
                    return number;
            })(dp2);




    }


        document.getElementById("disp1").value = dp1
        document.getElementById("disp2").value =  dp2;



}

console.log(dp2);
