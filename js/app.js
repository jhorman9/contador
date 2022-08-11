const total = document.querySelector(".total");
const aumentar = document.querySelector(".aumentar");
const disminuir = document.querySelector(".disminuir");

let contador = 0;

aumentar.addEventListener("click", ()=>{
  contador++;
  total.innerHTML = contador;
})

disminuir.addEventListener("click", ()=>{
    contador--;
    if(contador <= 0){
      contador = 0;
    }
    total.innerHTML = contador;
})
