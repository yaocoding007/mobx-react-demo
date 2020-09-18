import {inject, observer} from 'mobx-react';
import React,{PureComponent} from 'react';

import Item from './item';


@inject('todoStore')
@inject('globalStore')
@observer
class TodoList extends PureComponent {

    handleDel = (id) => {
        this.props.todoStore.delTodo(id);
    }

    render() {
        const {todoStore: {todoList, totalTodos}} = this.props;
        return (
            <div>
                {
                    totalTodos 
                    ? <>
                        {
                            todoList.map(item => (
                                <Item key={item.id} data={item}/>
                            ))
                        }
                    </>
                    : <div className="empty">今日事今日毕</div>
                }
            </div>
        )
    }
}

export default TodoList;