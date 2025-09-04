const reiniciarBtn = document.getElementById('bth-reiniciar')

avanca.forEach(button =>{
button.addEventListener('click', function() {
const atual= document.querySelector('.ativo');
const proximoPasso= 'passo-'+this.getAttribute('data-proximo');


atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso)

if (proximoElemento){
    proximoElemento.classlist.add('ativo');
} else {
    console.error(`elemto com ID "${proximoPasso}" não encontrado.`)
  }
 });
});