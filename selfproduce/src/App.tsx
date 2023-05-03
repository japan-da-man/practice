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
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
