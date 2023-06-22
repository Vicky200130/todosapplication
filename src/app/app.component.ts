import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  showHead = false;
  todolist =this.gettodoList();
  gettodoList(){
      let listA:any = localStorage.getItem("ToDoList");
      let parsedList:any = JSON.parse(listA);
      if (parsedList === null){
        return [] ;
      }
      else {
        return parsedList;
      }
  }
  

  
}
