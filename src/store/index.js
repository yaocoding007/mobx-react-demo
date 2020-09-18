import TodoStore from './todoStore';
import GlobalStore from './globalStore';

let todoStore = new TodoStore();
let globalStore = new GlobalStore();

const stores = {
    todoStore,
    globalStore
}

export default stores;