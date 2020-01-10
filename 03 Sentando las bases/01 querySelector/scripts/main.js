const resaltado =document.querySelector('.resaltado');
resaltado.classList.add('comentario');

const azul=document.querySelectorAll('hr');
for (i=0;i<azul.length; i++){
    azul[i].classList.add('azul');
console.log(azul);
}
var caracteres =document.querySelectorAll('.comentario--texto');
for( i=0;i<caracteres.length;i++){
    if(caracteres[i].textContent.length > 50){
        caracteres[i].classList.add('caracteresOcultos');
    }
}

console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')
