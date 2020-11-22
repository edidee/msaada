

function hireForm(){
    let hireMeForm = document.getElementById('hire-me-form');
    hireMeForm.style.display = 'block'
}
document.addEventListener('click', function(e){
    var clik = e.target.id;
    if (clik == 'hire-me-form'){
        var stoop = document.getElementById('hire-me-form')
        stoop.style.display='none'
    }
})
let hireMe = document.getElementsByClassName(hirebtn);
