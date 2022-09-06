function check(){
    if(document.getElementById("entry").value == ''){
        alert("Enter head count!!");
    }
    else {
        if(document.getElementById("entry").value <0){
            alert("Enter valid head count!!");
        }
        else{
            if(document.getElementById("entry").value == 0 || !(Number.isInteger(Number(document.getElementById("entry").value)))){
                alert("Enter valid head count!!");
            }
            else{
                window.location.href = "page2.html";
                localStorage.setItem("mvalue",document.getElementById("entry").value);
            }

        }
        
    }
    // localStorage.setItem("mvalue",document.getElementById("entry").value);
    

}
