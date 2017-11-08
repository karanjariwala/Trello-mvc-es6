import lanes from './constants';
import Controller from './Controller';

class Modle{
    constructor(){
        this.cards=[];

    }

    addTodo(name, desc){

        this.cards.push({
            id: new Date().valueOf(),
            name,
            desc,
            lane:lanes.TODO,
        })
       

    }

    changeLane(cardId,newLane){
        console.log(cardId,newLane, this.cards);
        this.cards[this.cards.findIndex((card)=>card.id=cardId)].lane=newLane;

    }

    

}

export default Modle;