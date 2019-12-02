
var CurrentColor = "no color selected";
var iCount = 0;
var txt = "Add to cart";
var txt1 = "CheckOut";

function CheckOutClick() {
    var s = document.getElementsByClassName("CheckOut")[0].innerHTML;
            
    if (s != "Checkout Now") { window.open("dialog.html");}
    window.open("dialog.html");
}
    

function indexShow() {
    document.getElementsByClassName("count").innerHTML=iCount;
    for (j = 1; j < iCount + 1; j++) {
        document.getElementById("dot" + j.toString()).style.display = "inline-block"; 
        document.getElementById("dot" + j.toString()).style.backgroundColor = CurrentColor;
        if (s != "Checkout Now") {
            document.getElementsByClassName("CheckOut")[0].innerHTML =txt;
        }
        else {
            document.getElementsByClassName("CheckOut")[0].innerHTML = txt1;
        }
    }
    
    
}


function CancelClick() {
    window.close();
}

function SubmitClick() {
    console.log("start");
    document.getElementsByClassName("CheckOut")[0].innerHTML = "Checkout Now";
    var iCount = parseInt(document.getElementsByClassName("quantity")[0].innerHTML);
    

    console.log(iCount);
    window.close();
}

function PlusClick() {
    var i = parseInt(document.getElementsByClassName("quantity")[0].innerHTML);
    document.getElementsByClassName("quantity")[0].innerHTML = (i + 1).toString();
}

function MinusClick() {
    var i = parseInt(document.getElementById("quantity").innerHTML);
    if (i > 0) {
        document.getElementById("quantity").innerHTML = (i - 1).toString();
    } 
}

function ColorClick(elm) {
    CurrentColor = (elm.id).toString();
    iCount = 0;

    document.getElementById("CheckOut").innerHTML = "Add to cart";
    for (j = 0; j < 14; j++) {
        document.getElementsByClassName("btnCl")[j].style.borderWidth = "0px";
    }
    for (j = 1; j < 31; j++) {
        document.getElementById("dot" + j.toString()).style.visibility = "hidden"; 
        //document.getElementsByClassName("dot").style.visibility= "hidden"; 
    }
    document.getElementById(CurrentColor).style.borderWidth = "0.5px";



}








