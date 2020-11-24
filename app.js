

function hireForm(){
    let hireMeForm = document.getElementById('hire-me-form');
    hireMeForm.style.display = 'block'
}
document.addEventListener('click', function(e){
    let clik = e.target.id;
    if (clik == 'hire-me-form'){
        let stoop = document.getElementById('hire-me-form')
        stoop.style.display='none'
    }
})

function becomeWorker(){
    let becomeaWorker = document.getElementById('become-worker');
    becomeaWorker.style.display = 'block'
}
document.addEventListener('click', function(e){
    let pressOn = e.target.id;
    if (pressOn == 'become-worker'){
        let end = document.getElementById('become-worker')
        end.style.display = 'none'
    }
})


function signinForm(){
    let signForm = document.getElementById('signin-form');
    signForm.style.display = 'block'
}
document.addEventListener('click', function(e){
    let press = e.target.id;
    if (press == 'signin-form'){
        let stop = document.getElementById('signin-form')
        stop.style.display='none'
    }
})

function signupForm(){
    let sign_upForm = document.getElementById('signup-form');
    sign_upForm.style.display = 'block'
}
document.addEventListener('click', function(e){
    let clickon = e.target.id;
    if (clickon == 'signup-form'){
        let close = document.getElementById('signup-form')
       close.style.display='none'
    }
})
