document.addEventListener('DOMContentLoaded', setPhoto);
function setPhoto(){
    let newImage = localStorage.getItem('image');
    if(newImage){
        document.getElementById('myimage').setAttribute('src', newImage);
    }
}

//______________________________________________________________ CURRENT DATE ______________________________________________________________
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
let  currentDate = document.getElementById('currentDate').textContent = 'A data de hoje é ' + today
//______________________________________________________________ FUNCTION CHANGE DARK MODE______________________________________________________________
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

//______________________________________________________________ GET NAME FUNCTION  ______________________________________________________________
let nick = localStorage.getItem('nickname');
let welcome = document.getElementById('welcome').textContent = 'Bem vindo (a), ' + nick + ' faça uma lista dos seus maiores sonhos com seu parceiro (a)'
//______________________________________________________________ set NAME/DATE/TIME FUNCTION  _______________________________________________________
const nameOfDoList = document.getElementById('doList');
const dateOfDoList = document.getElementById('setDate');
const timeOfDoList = document.getElementById('setTime');
const sendButton = document.getElementById('sendList');
const result = document.getElementById('containerList');

sendButton.addEventListener('click', _=>{
    let descriptions = new Array();

    if(localStorage.hasOwnProperty('descriptions')){
        descriptions = JSON.parse(localStorage.getItem('descriptions'));
    }

    /* Adiciona um novo valor no array criado */
    descriptions.push({title: nameOfDoList.value});

    /* Salva o item */
    localStorage.setItem('descriptions', JSON.stringify(descriptions));

    /* Exibe o resultado */
    if(dateOfDoList.value ==='' && timeOfDoList.value === ''){
      result.insertAdjacentHTML('beforeend', `<li class='x'>${nameOfDoList.value}</li>`);
    }
});
 /**
  * Função responsável por carregar o conteúdo
  */
 let x = JSON.parse(localStorage.getItem('days'));
  window.addEventListener("load", _ => {
    if (localStorage.hasOwnProperty("descriptions")) {
      JSON.parse(localStorage.getItem('descriptions')).forEach(description =>{
        result.insertAdjacentHTML('beforeend', `<li>${description.title}</li>`);
      })
    }
  })





//______________________________________________________________ GET NAME/DATE/TIME FUNCTION  _______________________________________________________




