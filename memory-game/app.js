document.addEventListener('DOMContentLoaded', () => {
    //pares de cartas
    const cartasArray = [
      {
        name: 'cerezas1',
        img: 'images/cerezas1.png'
      },
      {
        name: 'burger1',
        img: 'images/burger1.png'
      },
      {
        name: 'cat1',
        img: 'images/cat1.png'
      },
      {
        name: 'moño1',
        img: 'images/moño1.png'
      },
      {
        name: 'gafas1',
        img: 'images/gafas1.png'
      },
      {
        name: 'heart1',
        img: 'images/heart1.png'
      },
      {
        name: 'burger1',
        img: 'images/burger1.png'
      },
      {
        name: 'cat1',
        img: 'images/cat1.png'
      },
      {
        name: 'cerezas1',
        img: 'images/cerezas1.png'
      },
      {
        name: 'gafas1',
        img: 'images/gafas1.png'
      },
      {
        name: 'heart1',
        img: 'images/heart1.png'
      },
      {
        name: 'moño1',
        img: 'images/moño1.png'
      }
    ]
  
    let tablero = document.querySelector('.tablero')
    let vidas=document.querySelector('#vidas')
    let mostrarResultado = document.querySelector('#result')
    var cartasElegidas = []
    var cartasElegidasId = []
    let cartasEmparejadas = []
    fail=3
    
  
    //crear tablero
    function crearTablero() {
        vidas.textContent=fail
        mostrarResultado.textContent = '0'   
        cartasArray.sort(() => 0.5 - Math.random())
      for (let i = 0; i < cartasArray.length; i++) {
        let carta = document.createElement('img')
        carta.setAttribute('src', 'images/interrogante1.png')
        carta.setAttribute('id', i)
        carta.addEventListener('click', destaparCarta)
        tablero.appendChild(carta)
      }
    }
  
    //emparejar
    function emparejar() {
      let cartas = document.querySelectorAll('img')
      const opcion1Id = cartasElegidasId[0]
      const opcion2Id =cartasElegidasId[1]
      if (cartasElegidas[0] === cartasElegidas[1]) {
        alert('¡Muy bien, has encontrado una pareja!')
        cartas[opcion1Id].setAttribute('src', 'images/pixel1.png')
        cartas[opcion2Id].setAttribute('src', 'images/pixel1.png')
        cartasEmparejadas.push(cartasElegidas)
        console.log(cartasEmparejadas)
        fail=fail+1
      } else {
        cartas[opcion1Id].setAttribute('src', 'images/interrogante1.png')
        cartas[opcion2Id].setAttribute('src', 'images/interrogante1.png')
        fail=fail-1
        if(fail<2){
        alert('¡Intentalo de nuevo!')  
        }       
        console.log(fail)
      }
      console.log(fail)
      if (fail===0){   
        alert('Has perdido')    
        tablero.innerHTML=" "
        mostrarResultado.innerHTML=" "
        vidas.innerHTML='No te quedan vidas'
        crearTablero ()  
        fail=3   
        cartasEmparejadas=[]
      }
      cartasElegidas = []
      cartasElegidasId = []
      mostrarResultado.textContent = cartasEmparejadas.length  
      vidas.textContent=fail    

      if  (cartasEmparejadas.length === cartasArray.length/2) {
        alert('Felicidades, has encontrado todas las parejas')
       /* tablero.innerHTML=" "
        mostrarResultado.innerHTML=" "
       crearTablero ()  */  
      }
    }
  
    //destapar carta
    function destaparCarta() {
      let cartaId = this.getAttribute('id')
      cartasElegidas.push(cartasArray[cartaId].name)
      cartasElegidasId.push(cartaId)
      this.setAttribute('src',cartasArray[cartaId].img)
      if (cartasElegidas.length ===2) {
        setTimeout(emparejar, 500)
      }
    }
  
    crearTablero()
  })