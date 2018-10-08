let angX = 0,
    angY = 0.
    cube = document.getElementById('cube'),
    a = document.getElementById('arriba')
    a.addEventListener('click',function(){moveCube('arriba')}); 
    document
        .getElementById('abajo')
        .addEventListener('click',function(){moveCube('abajo')}); 
    document
        .getElementById('derecha')
        .addEventListener('click',function(){moveCube('derecha')}); 
    document
        .getElementById('izquierda')
        .addEventListener('click',function(){moveCube('izquierda')}); 

 function moveCube(arg) {
  switch (arg) {
    case "arriba":
      angX = angX + 90;
      break;
    case "abajo":
      angX = angX - 90;
      break;
    case "derecha":
      angY = angY + 90;
      break;
    case "izquierda":
      angY = angY - 90;
      break;
  }
  cube.style.transform = 'rotateX(' + angX + 'deg) rotateY(' + angY + 'deg)'; 
};