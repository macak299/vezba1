const todoList = document.getElementById('todo-list');

fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => {
    data.forEach(todo => {
      const li = document.createElement('li');
      li.innerText = todo.title;
      todoList.appendChild(li);
    });
  })
  .catch(error => {
    console.error(error);
  });