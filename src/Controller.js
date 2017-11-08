import lanes from './constants';

class Controller{
    constructor(modle,view){
        this.modle=modle;
        this.view=view;
    }
    init(){


    }
    eventHandler(e){
        console.log(e);
        let el = e.target;
        switch(el.classList[0]){
            case 'addTodo':
                  if(el.form[0].value&&el.form[1].value){
                      this.modle.addTodo(el.form[0].value,el.form[1].value);
                      this.view.render();
                  }
                break;
            case 'move':
                  console.log(el.parentNode.id,el.id)
                  this.modle.changeLane(el.parentNode.id,el.id);
                  this.view.render();
                  break;
        }
    }

    notify(){
        this.view.render();
    }

 

}

export default Controller;