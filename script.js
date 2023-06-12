// // let toDo1 = ' Get groceries';
// // let toDo2 = 'Wash Car';
// // let toDo3 = 'Make Dinner';
// // let toDo4='Eat dessert';
// let todos = [{
//     title:'Eat Sushi',
//     dueDate:'2022-12-27',
//     id:'id1'},
//     {title:'Swim Daily',
//     dueDate:'2022-12-28',
//     id:'id2'},
//     {title:'Make Dinner',
//     dueDate: '2022-12-29',
//     id:'id3'}];

//    function createTodo(title, dueDate){
//     const id= ''+ new Date(). getTime();

//     todos.push({
//         title:title,
//         dueDate:dueDate,
//         id:id
//     });
//     saveTodos();
// }

// // todos.forEach(function(todoTitle) {
// //     let element = document.createElement('div');
// // element.innerText= todoTitle;
// // document.body.appendChild(element);
// // });
// function removeTodo(idToDelete){
//     todos = todos.filter(function(todo) {
//  if(todo.id===idToDelete) {
//     return false;
//  }  else {
//     return true;
//  }
//   });
//   saveTodos();

// }
// // render();
//  function saveTodos(){
//     localStorage.setItem('todos',JSON.stringify(todos));
//  }
// function addTodo(){
//     let textbox= document.getElementById('todo-title');
//      let title = textbox.value;
//     let datePicker= document.getElementById('date-picker');
//      let dueDate = datePicker.value;

//         createTodo(title, dueDate);
//         render();
// }
//     // function func(){
//     //     const num1 = 1;
//     //     const num5 = 5;
//     // if (num1 < num5){
//     //     console.log('run this code')
//     // } else{
//     //     console.log("run other code");
//     // }
//     // }

//  function deleteTodo(event){
//     const deleteButton = event.target;
//     const idToDelete = deleteButton.id;
// removeTodo(idToDelete);

//   render();
//  }

// function render(){
//     // reset the list of
//     document.getElementById('todo-list').innerHTML= '';
//     todos.forEach(function(todo) {
//     let element = document.createElement('div');
//     element.innerText= todo.title+' '+ todo.dueDate;
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText='Delete!';
//     deleteButton.style='margin-left: 13px;background-color:green';
//     deleteButton.onclick = deleteTodo;
//     deleteButton.id = todo.id;
//     element.appendChild(deleteButton);
//     let todoList=document.getElementById('todo-list');
//     todoList.appendChild(element);
// });
// }

console.log("ISaac");
