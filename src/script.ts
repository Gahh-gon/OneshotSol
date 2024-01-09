// Com classe

class Interruptor{
   private body: Element| null;
   private solImg: any;
   private tituloH1:Element|null

   constructor(){
      this.body = document.querySelector('body')
      this.solImg = document.querySelector('#imgSol')
      this.tituloH1 = document.querySelector('h1')
   }

    desligar():void{
         
         this.body?.classList.add('bg-blue-950')
         this.body?.classList.remove('bg-yellow-400')
         this.tituloH1?.classList.remove('text-blue-500')
         this.tituloH1?.classList.add('text-yellow-500')
         this.solImg.src = './image/solDesligado.png'
         btnSol?.classList.add("hidden")
         btnSolLigar?.classList.remove("hidden")     
   }
   ligar(){
    
      this.body?.classList.remove('bg-blue-950')
      this.body?.classList.add('bg-yellow-400')
      this.tituloH1?.classList.add('text-blue-500')
      this.tituloH1?.classList.remove('text-yellow-500')
      this.solImg.src = './image/solLigado.png'
      btnSol?.classList.remove("hidden")
      btnSolLigar?.classList.add("hidden")     
   }
}
const interruptor = new Interruptor
const btnSol:Element|null = document.querySelector('#btnDesligar')
const btnSolLigar:Element|null = document.querySelector('#btnLigar')


btnSol?.addEventListener('click', () =>interruptor.desligar())
btnSolLigar?.addEventListener('click', () =>interruptor.ligar())






// sem classe 

// const DesligarSol = ():void =>{
//    const body:Element|null = document.querySelector('body')
//    const solImg:any = document.querySelector('#imgSol')
//    solImg.src = './image/solDesligado.png'
//    body?.classList.add('bg-blue-950')
//    body?.classList.remove('bg-yellow-400')
// btnSol?.classList.add("hidden")
// btnSolLigar?.classList.remove("hidden")
    
// }

// const ligarSol = ():void=>{
//  const body:Element|null = document.querySelector('body')
//  const solImg:any = document.querySelector('#imgSol')
//  solImg.src = './image/solLigado.png'
//  body?.classList.remove('bg-blue-950')
//  body?.classList.add('bg-yellow-400')
// btnSol?.classList.remove("hidden")
// btnSolLigar?.classList.add("hidden")
  
// }

// btnSol?.addEventListener('click',()=> DesligarSol())
// btnSolLigar?.addEventListener('click',() => ligarSol())