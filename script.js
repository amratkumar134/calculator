function setValue(val){
    document.querySelector(".inp").value+=val;


}
function calculate(){
    var data=document.querySelector(".inp").value;
    let answer=eval(data);
    document.querySelector(".inp").value=answer;
}
function clearAll(){
    document.querySelector(".inp").value="";
}
function backSpace(){
    let data=document.querySelector(".inp").value;
    let newData=data.substring(0,data.length-1);
    document.querySelector(".inp").value=newData;
}
function squareRoot(){
    let data=document.querySelector(".inp").value;
    let answer=Math.sqrt(Number(data));
    document.querySelector(".inp").value=answer;
}

