# React Client for Todo App

> The app communicates witha  python flask api that uses a sqlite database. You have the ability to create a todo, delete that todo and mark that todo complete.

TODO:

- Create a form for creating a todo
    - take that data from the form and submit it to the flask api
    - `/api/create-todo`
- render all todos
    - get all todos from flask api
    - `/api/get-all-todos`
- Mark todo complete
    - Talk to flask api and mark done as 'true' via 'id'
    - `/api/edit-todo/<id>`
- Delete todo
    - talk to flask api and delete by 'id'
    - `/api/delete-todo/<id>`