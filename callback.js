addition(2,3,displayresult);

function addition(x,y,callBack){
    let result=x+y;
    callBack(result);
}

function displayresult(result)
{
    console.log(result);
}