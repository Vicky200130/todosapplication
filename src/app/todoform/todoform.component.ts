import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {
  @Input() todoList1:any ;
  isChecked:boolean = true ;
  taskValue:string = "";
  length = 0 ;
  activeButton(e:any){
    if (e.target.value.trim() === ""){
        this.isChecked = true ;
        e.target.value=null;
        
    }
    else {
      this.isChecked = false;
      this.taskValue =e.target.value;
    }
  }
  Addtodo(){
    let inputEl:any = document.getElementById("todoInputEl");
    inputEl.value= null;
    this.isChecked = true ;
    if(this.todoList1 === null){
      this.length = 0;
    }
    else{
      for (let each of this.todoList1){
        this.length = each.id;
      }
    }
    let newtodo = {
      id : this.length + 1  ,
      task : this.taskValue ,
      isChecked :false
    
    };
    this.todoList1.push(newtodo);
    
    
    
  }
}
