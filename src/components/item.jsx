import { inject, observer } from 'mobx-react';
import React from 'react';


function Item({todoStore, data}) {

    return (
        <div style={{
            color: data.completed ? 'gray' : '#333',
            marginTop: '10px'
        }}>
            <p>
                <span style={{marginRight: '30px'}}>{data.text} </span>
                <span style={{float: 'right'}}>
                    <span 
                        className="pointer"
                        style={{marginRight: '10px'}} 
                        onClick={_ => todoStore.changeStatus(data.id)}>
                        {data.completed ? '代办' : '完成'}
                    </span>
                    <span 
                        className="pointer"
                        onClick={_ => todoStore.delTodo(data.id)}
                    >
                        删除
                    </span>
                </span>
            </p>
        </div>
    )
}


export default inject('todoStore')(observer(Item));