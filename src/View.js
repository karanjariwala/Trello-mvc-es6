import lanes from './constants';

class View{
    constructor(modle){
        this.modle=modle;

    }
    render(){
        let dom =document.getElementById('main');
        let form= addTodoFormView();
        let board = boardView(this.modle.cards);
        dom.innerHTML=`<div>
                        ${form}
                        ${board}
                        </div>`
    }
}


const addTodoFormView = () =>{
    return `<div>
                <form>
                    <input type="todoName" name="todoName" class='todoName'/>
                    <input  type="todoDesc" name="todoDesc" class='todoDesc'/>
                    <input id='addTodo' type="submit" class='addTodo'/>
                </form>
            </div>`
}

const boardView = (cards)=>{

    if(cards.length>0){return `<div style="display:flex; ">
                <div style="height:100%; padding :10px; margin :10px" class='lane' id='todo-lane'>
                <h2> ${lanes.TODO}</h2>
                    ${cards
                    .filter((card)=>card.lane===lanes.TODO)
                    .map((card)=>`<div class='card' id=${card.id}>
                                        <h3>${card.name}</h3>
                                        <p> ${card.desc}</p>
                                        <button class='move' id=${lanes.INPROGRESS}>${lanes.INPROGRESS}</button>
                                        <button class='move' id=${lanes.HOLD}>${lanes.HOLD}</button>
                                        <button class='move' id=${lanes.COMPLETE}>${lanes.COMPLETE}</button>
                                        </div>`)}
                    </div>
                    <div style="height:100% ;padding :10px; margin :10px" class='lane' id='inprogress-lane'>
                    <h2> ${lanes.INPROGRESS}</h2>
                    ${cards
                    .filter((card)=>card.lane===lanes.INPROGRESS)
                    .map((card)=>`<div class='card' id=${card.id}>
                                        <h3>${card.name}</h3>
                                        <p> ${card.desc}</p>
                                        <button class='move' id=${lanes.TODO}>${lanes.TODO}</button>
                                        <button class='move' id=${lanes.HOLD}>${lanes.HOLD}</button>
                                        <button class='move' id=${lanes.COMPLETE}>${lanes.COMPLETE}</button>
                                       
                                        </div>`)}
                    </div>
                    <div style="height:100%;padding :10px; margin :10px" class='lane' id='complete-lane'>
                    <h2> ${lanes.COMPLETE}</h2>
                    ${cards
                    .filter((card)=>card.lane===lanes.COMPLETE)
                    .map((card)=>`<div class='card' id=${card.id}>
                                        <h3>${card.name}</h3>
                                        <p> ${card.desc}</p>
                                        <button class='move' id=${lanes.INPROGRESS}>${lanes.INPROGRESS}</button>
                                        <button class='move' id=${lanes.HOLD}>${lanes.HOLD}</button>
                                        <button class='move' id=${lanes.TODO}>${lanes.TODO}</button>
                                        </div>`)}
                    </div>
                    <div style="height:100%;padding :10px; margin :10px" class='lane' id='hold-lane'>
                    <h2> ${lanes.HOLD}</h2>
                    ${cards
                    .filter((card)=>card.lane===lanes.HOLD)
                    .map((card)=>`<div class='card' id=${card.id}>
                                        <h3>${card.name}</h3>
                                        <p> ${card.desc}</p>
                                        <button class='move' id=${lanes.INPROGRESS}>${lanes.INPROGRESS}</button>
                                        <button class='move' id=${lanes.TODO}>${lanes.TODO}</button>
                                        <button class='move' id=${lanes.COMPLETE}>${lanes.COMPLETE}</button>
                                        </div>`)}
                        </div>
                        </div>`}
        
                        return `<div>Add a Card to see.</div>`;
              

                                


}

export default View;