import { Component, Input } from '@angular/core';
import {Todo} from './todo.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  todoList: Array<Todo>;
  todoElement:Todo;

  constructor() { 
    this.todoElement = {title:'',completed:false, tomorrow:false};
    this.todoList = [];
  }

  
  addTodo(event:Event) {
    if(this.todoElement.title){
    this.todoList.push(this.todoElement);
    this.todoElement={title:'',description:'',completed:false,tomorrow:false};
    event.preventDefault();
    }
  }

  deleteTodo(index:number) {
    this.todoList.splice(index, 1);
  }
  selectedTodos() {
    for(var i=(this.todoList.length -1); i > -1; i--) {
      if(!this.todoList[i].tomorrow) {
        this.todoList[i].completed=true;
      }
    }
  }
  changeDay(event:Event){
    if((<HTMLTextAreaElement>event.target).value=="toDay")
      this.todoElement.tomorrow=false;
    else
      this.todoElement.tomorrow=true;
  }
  findOnetoDay():boolean{
    if(!this.todoList.some(x=>x.tomorrow==false)) return false
    else return true;
  }

}
