import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickAdd = () => {

    const newTask = [...task];

    newTask.push(text);
    setTask(newTask);
    setText("");
  };

  return (
    <div>
    </div>
  );
}

export default App;
