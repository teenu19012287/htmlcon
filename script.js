let btn = document.querySelector('button');
btn.addEventListener('click', inputmsg);

function inputmsg(){
    let name = prompt('enter the name of the stduent');
    btn.textContent = 'rollno:1'+name;

}