import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { TaskList } from "./components/TaskList";

export const App: FC = () => {
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

  const onClickDelete = useCallback(
    (index: number) => {
      const newTask = [...task];
      newTask.splice(index, 1);
      setTask(newTask);
    },
    [task]
  );

  return (
    <div>
      <h1 className="title">TodoList</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <TaskList tasks={task} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 20px;
`;
