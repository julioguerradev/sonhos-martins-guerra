function mouseOn(){
    let label = document.getElementsByTagName("label")[1];
    label.setAttribute("class","select-img");
}
function mouseOut(element){
    let label = document.getElementsByTagName("label")[1];
    label.className = "";
}

function darkMode(element){
    document.getElementsByTagName("input");
    let checkbox = document.getElementById("btnDarkMode");
    let dark = document.body;
    if (checkbox.checked){
        dark.setAttribute("class","bright-mode");
    }else{
        dark.setAttribute("class","dark-mode");
    }
}


