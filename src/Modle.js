import lanes from './constants';
import Controller from './Controller';

class Modle{
    constructor(){
        this.cards=[];

    }

    addTodo(name, desc){

        this.cards.push({
            id:  getNewId(),
            name,
            desc,
            lane:lanes.TODO,
        })

        console.log(this.cards)
       

    }

    changeLane(cardId,newLane){
        console.log(cardId,newLane, this.cards);
        this.cards[this.cards.findIndex((card)=>card.id===cardId)].lane=newLane;

    }

    

}

const getNewId =()=>Math.random().toString(36).substr(2, 10);

export default Modle;