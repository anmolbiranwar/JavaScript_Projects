const toggle=document.getElementById('toggleDark');
const body=document.querySelector('body');

toggle.addEventListener('click', funcion() {
    this.classList.toggle('bi-moon');
});