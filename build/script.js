"use strict";
class Interruptor {
    body;
    solImg;
    tituloH1;
    constructor() {
        this.body = document.querySelector('body');
        this.solImg = document.querySelector('#imgSol');
        this.tituloH1 = document.querySelector('h1');
    }
    desligar() {
        this.body?.classList.add('bg-blue-950');
        this.body?.classList.remove('bg-yellow-400');
        this.tituloH1?.classList.remove('text-blue-500');
        this.tituloH1?.classList.add('text-yellow-500');
        this.solImg.src = './image/solDesligado.png';
        btnSol?.classList.add("hidden");
        btnSolLigar?.classList.remove("hidden");
    }
    ligar() {
        this.body?.classList.remove('bg-blue-950');
        this.body?.classList.add('bg-yellow-400');
        this.tituloH1?.classList.add('text-blue-500');
        this.tituloH1?.classList.remove('text-yellow-500');
        this.solImg.src = './image/solLigado.png';
        btnSol?.classList.remove("hidden");
        btnSolLigar?.classList.add("hidden");
    }
}
const interruptor = new Interruptor;
const btnSol = document.querySelector('#btnDesligar');
const btnSolLigar = document.querySelector('#btnLigar');
btnSol?.addEventListener('click', () => interruptor.desligar());
btnSolLigar?.addEventListener('click', () => interruptor.ligar());
