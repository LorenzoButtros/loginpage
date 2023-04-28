import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

export class HomePage{
  constructor(){}
  todos: string[] = [];
  todoModel = { todo:''};
  addTodo(){
    this.todos.push(this.todoModel["todo"]);
    this.todoModel = {todo:''};
  }

}

//.controller("TodoContainer", function($scope)) {
//  $scope.todos = [];
//  $scope.todosModel = {};
  // $scope.todoModel.todo = '';
//  $scope.addTodo = function(){
//    $scope.todos.push($scope.todoModel.todo);
//
//  }
//}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
