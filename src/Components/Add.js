import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Add = (props) => {
  let textRef = React.createRef();
  let handleAdd = () => {
    if (textRef.current.value !== null) {
      props.add(textRef.current.value);
      textRef.current.value = '';
    }
  };
  return (
    <TodoWrapper>
      <InputText
        ref={textRef}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleAdd();
          }
        }}
      ></InputText>
      <AddButton onClick={handleAdd}>
        <FaPlus> </FaPlus>
      </AddButton>
    </TodoWrapper>
  );
};
const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(90%, 550px);
  margin: 0 auto;
  background: #fce730;
  margin-top: 1rem;
`;
const InputText = styled.input`
  height: 40px;
  width: min(90%, 500px);
  background: #c4c4c4;
  font-size: 1.5rem;
  color: gray;
  border: none;
  padding: 0 4px;
`;

const AddButton = styled.button`
  background: yellow;
  width: 40px;
  height: 40px;
  color: blue;
  font-size: 1.2rem;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  border: none;
  &:focus {
    outline: none;
  }
`;
