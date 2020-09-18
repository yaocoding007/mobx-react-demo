import React from 'react';
import { useStores } from '../hooks';
import { useObserver } from 'mobx-react-lite';

function Footer() {
    let store = useStores(); 
    const {todoStore} = store;
    return useObserver(() => (
        <div className="footer">
            count: {todoStore.totalTodos}
            <span className="pointer" onClick={_ => todoStore.clearTodos()} >重置</span>
        </div>
    ))
}


export default Footer;