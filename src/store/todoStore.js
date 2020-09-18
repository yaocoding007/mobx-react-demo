import {observable, action, computed} from 'mobx';

const INIT_TODO = {
    id: 1,
    text: 'mobx事例',
    completed: false
}

class TodoStore {

    @observable 
    todoList = [INIT_TODO];

    @computed 
    get totalTodos() {
        return this.todoList.length
    }

    @action 
    addTodo(text){
        const newTodo = {
            id: +new Date(),
            text,
            completed: false
        }
        this.todoList = [...this.todoList, newTodo];
    }

    @action
    changeStatus(id) {
        this.todoList = this.todoList.map(item => {
            return item.id === id
            ? {...item, completed: !item.completed}
            : item
        })
    }


    @action 
    delTodo(id){
        this.todoList = this.todoList.filter(item => item.id !== id)
    }

    @action
    clearTodos() {
        this.todoList = [];
    }
}

export default TodoStore;