const btn=document.getElementsByClassName('fa-bars')[0];
const active=document.getElementById('active');
console.log(btn);
btn.addEventListener('click',()=>{
    active.classList.toggle('active')
})