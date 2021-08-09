function mouseOn(){
    document.getElementsByTagName("label")[1].setAttribute("class","select-img");
}
function mouseOut(){
    document.getElementsByTagName("label")[1].className = "";
}
//______________________________________________________________

function darkMode(){
    document.getElementsByTagName("input");
    let checkbox = document.getElementById("btnDarkMode");
    let dark = document.body;
    if (checkbox.checked){
        dark.setAttribute("class","bright-mode");
    }else{
        dark.setAttribute("class","dark-mode");
    }
}
//______________________________________________________________
function onFileSelected(event) {
    let selectedFile = event.target.files[0];
    let reader = new FileReader();

    let imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
      imgtag.src = event.target.result;
      };

    reader.readAsDataURL(selectedFile);
    
}

