import View from './View';
import Modle from './Modle';
import Ctrl from './Controller';



class Trello{
    constructor(){
        this.modle = new Modle();
        this.view = new View(this.modle);
        this.controller= new Ctrl(this.modle,this.view)
    }

}

let myTrello = new Trello();


myTrello.view.render();


window.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e,e.target.value)
    myTrello.controller.eventHandler(e)
})

