import React, { useState } from 'react';
import {Provider} from 'mobx-react';
import {Input} from 'antd';
import 'antd/dist/antd.css';

import './App.css';
import stores from './store';
import {TodoList, Footer} from './components';

function App() {
  const [value, setValue] = useState('')

  return (
    <Provider {...stores} > 
		<div className="App">
			<Input 
				value={value}
				placeholder="添加代办"
				onPressEnter={handleSubmit}
				onChange={e => setValue(e.target.value)}
			/>
			<TodoList />
			<Footer	/>
		</div>
    </Provider>
  )

  function handleSubmit() {
	stores.todoStore.addTodo(value);
	setValue('');
  }
  
}

export default App;
