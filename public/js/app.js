const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const locate = search.value;
    message1.textContent = "Loading....."
    message2.textContentb= "";
    fetch('/weather?address=' + locate).then((response)=>{
       
            response.json().then((data)=>{
                if(data.error)
                message1.textContent = data.error;
                else
                message1.textContent = "AYYAAAVAAAAA BOMBAAIIIIIIII";
            });       

     });
});