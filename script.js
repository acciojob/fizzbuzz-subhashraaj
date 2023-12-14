function fizzbuzz(i){
    if(i%3==0 && i%5==0){
        return("FizzBuzz")
    }
    else if(i%3==0){
        return ("Fizz")
    }
    else if(i%5==0){
        return ("Bizz")
    }
    else{
        return i;
    }
}

let start=0;
let end=100;
for (let i=start;i<=end;i++){
    //alert(fizzbuzz(i));
}
