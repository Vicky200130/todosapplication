import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input() todoList:any ;
  save(){
    let strifiedTodo = JSON.stringify(this.todoList);
    localStorage.setItem("ToDoList",strifiedTodo);
  }
  deleteItem(buttonid:any){
    let TaskIndex = this.todoList.findIndex(function(each:any){
      let button = "button"+each.id ;
      if (buttonid.target.id === button){
        return true ;
      }
      else{
        return false;
      }
    });
    if (TaskIndex !== -1){
      console.log(TaskIndex);
      let {id} = this.todoList[TaskIndex];
      let labelId = "listItem"+id ;
      this.todoList.splice(TaskIndex,1);
    }
  }
  changeStatus(inputEl:any){
    let TaskIndex=this.todoList.findIndex(function(each:any){
      let input = "checkboxId"+each.id ;
      if(input === inputEl.target.id ){
        return true ;
      }
      else{
        return false;
      }
    });
    if (TaskIndex !== -1){
      let {isChecked} = this.todoList[TaskIndex];
      if (isChecked === false){
        this.todoList[TaskIndex].isChecked = true;
      }
      else{
        this.todoList[TaskIndex].isChecked = false;
      }
    }
    
  }
}
