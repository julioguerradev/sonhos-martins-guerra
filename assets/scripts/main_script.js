//______________________________________________________________ FUNCTION HOVER FILE ______________________________________________________________
let imageContain = document.getElementById("photo-wrapper");
let chooseButton = document.getElementById("label");

imageContain.addEventListener('mouseenter', function(){
    chooseButton.style.opacity="1";
});
imageContain.addEventListener('mouseleave', function(){
    chooseButton.style.opacity="0";
});


//______________________________________________________________ FUNCTION CHANGE DARK MODE ______________________________________________________________
let buttonDark = document.getElementById('alt-mode');

buttonDark.addEventListener('click', function(){
    document.getElementsByTagName('input');
    let checkbox = document.getElementById('btnDarkMode');
    let dark = document.body;
    let freelink = document.getElementById('freelink');
    
    if (checkbox.checked){
        dark.setAttribute('class','bright-mode');
        localStorage.setItem('check', document.body.getAttribute('class'))
        
        freelink.setAttribute('class','freelink1')
        localStorage.setItem('checkLink', freelink.getAttribute('class'))
    }else{
        dark.setAttribute('class','dark-mode');
        localStorage.setItem('check', document.body.getAttribute('class'))
        
        freelink.setAttribute('class','freelink2')
        localStorage.setItem('checkLink', freelink.getAttribute('class'))
    }
});

document.addEventListener('DOMContentLoaded', function(){
    document.body.setAttribute('class', localStorage.getItem('check'));

    document.getElementById('freelink').setAttribute('class',localStorage.getItem('checkLink'));
});

//______________________________________________________________ FUNCTION CHOOSE AND PUT IMAGE ______________________________________________________________ 
let picture = document.getElementById('myimage');
let file = document.getElementById('choose-photo');

file.addEventListener('change', function(){
    let profilePic = this.files[0];

    if (profilePic){
        let reader = new FileReader();//O objeto FileReader permite aplicações web ler assincronamente o conteúdo dos arquivos (ou buffers de dados puros) do computador do usuário, utilizando o objeto File ou Blob para especificar o arquivo ou os dados a serem lidos

        reader.addEventListener('load', function(){
            picture.setAttribute('src', reader.result);
            localStorage.setItem('image', reader.result);
        })
        reader.readAsDataURL(profilePic);
    }
 })

document.addEventListener('DOMContentLoaded', setPhoto);//O evento DOMContentLoaded é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens, e subframes para encerrar o carregamento. Um evento muito diferente - load - deve ser usado apenas para detectar uma página completamente carregada.

function setPhoto(){
    let newImage = localStorage.getItem('image');
    if(newImage){
        document.getElementById('myimage').setAttribute('src', newImage);
    } 
}
//______________________________________________________________ GET NAME ______________________________________________________________

let sendButton = document.getElementById("submit");
sendButton.addEventListener('click', function(){
    let getName = document.getElementById("userName").value;

    localStorage.setItem('nickname',getName);
});


