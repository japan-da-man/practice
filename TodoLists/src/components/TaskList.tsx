import { FC } from "react";
import styled from "styled-components";

type Props = {
  tasks: string[];
  onClickDelete: (index: number) => void;
};


const STitle = styled.div`
  padding: 0px 17px;
  margin: 10px 520px 0px 15px;
`;
const SDelleteButton = styled.button`
  margin-left: 20px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  margin: 20px 8px;
`;
const STaskWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const STaskcontents = styled.div`
  padding-bottom: 4px;
`;


export const TaskList: FC<Props> = (props) => {
  const { tasks, onClickDelete } = props;

  return (
    <SContainer>
      <STitle>
        <p>タスク一覧</p>
      </STitle>
      <ul>
        {tasks.map((task, index) => (
          <STaskcontents>
          <li key={task}>
            <STaskWrapper>
                <p>{task}</p>
              <SDelleteButton onClick={() => onClickDelete(index)}>削除</SDelleteButton>
            </STaskWrapper>
          </li>
          </STaskcontents>
        ))}
      </ul>
    </SContainer>
  );
};
