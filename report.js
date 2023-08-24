const btnGuest = document.getElementsByTagName('button')[0];
const btnAdmin = document.getElementsByTagName('button')[1];
let logIn = document.getElementsByTagName('p')[0];

let admin = false;

btnGuest.addEventListener('click', ()=>{

    logIn.textContent = 'you are logged in as: ' + btnGuest.value;

    admin = false;
})

btnAdmin.addEventListener('click', ()=>{

    logIn.textContent = 'you are logged in as: ' + btnAdmin.value;

    admin = true;

})

document.getElementById('seeReport').addEventListener('click', ()=>
{

    if(admin === false)
    {    
        location.href="403.html";
    }else
    {
        location.href="report.html";
    }

})