function myFunction1() {
    var x = document.getElementById("f1name").value;
    document.getElementById("f1name").innerHTML = x;
    console.log(x)

}


function myFunction2() {
    var x = document.getElementById("f2name").value;
    document.getElementById("fname1").innerHTML = x;
    console.log(x)

}


function myFunction3() {
    var x = document.getElementById("f3name").value;
    document.getElementById("fname2").innerHTML = x;
    console.log(x)

}



function myFunction41() {
    const a = document.getElementById("fname3").value;
    

    console.log(a)
    var b=a*20/100
    console.log(b)
    var e=0.00
    


}

function calculate41(){
    const e=0.00
    const a = document.getElementById("fname3").value;
    

    console.log(a)
    var b=a*20/100
    console.log(b)
    
    const header = document.getElementById("fname5");
    header.innerHTML=b;
    const header1 = document.getElementById("fname6");
    header1.innerText=e
    const header2 = document.getElementById("fname7");
    header2.innerText=e
    const header3 = document.getElementById("fname8");
    header3.innerText=b+e+e
    
}

function calculate42(){
    const e=0.00
    const a = document.getElementById("fname3").value;
    

    console.log(a)
    var b=a*50/100
    console.log(b)
    
    const header = document.getElementById("fname5");
    header.innerHTML=b;
    const header1 = document.getElementById("fname6");
    header1.innerText=e
    const header2 = document.getElementById("fname7");
    header2.innerText=e
    const header3 = document.getElementById("fname8");
    header3.innerText=b+e+e


}


function myFunction5() {
    var b = document.getElementById("f5name").value;
    document.getElementById("f5name").innerHTML = x;
    console.log(x)

}





function myFunction6() {
    var c = document.getElementById("f6name").value;
    document.getElementById("f6name").innerHTML = x;
    console.log(x)

}



function myFunction7() {
    var d = document.getElementById("f8name").value;
    document.getElementById("f8name").innerHTML = x;
    console.log(x)
}


function myFunction8() {
    var x = document.getElementById("f8name").value;
    document.getElementById("f8name").innerHTML = x;
    console.log(x)
}


function reset() {
    window.location.reload();
}