var app = angular.module('todo')
app.controller('todosController', function(){
  this.todos = [
    'Walk the dog',
    'Buy groceries',
    'Drink coffee',
    'Wake up like this'
  ]
  this.formIsVisible = false
  this.toggleForm = function(){
    console.log('toggleForm')
    if(this.formIsVisible){
      this.formIsVisible = false
    } else {
      this.formIsVisible = true
    }
  }
  this.create = function(){
    this.todos.unshift(this.content)
  }
  this.edit = function(index){
    var todo = this.todos[index]
    this.content = todo
  }
  this.update = function(index){
    this.todos[index] = this.content
  }
})
