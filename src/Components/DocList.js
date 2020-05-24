import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import DocItem from './DocItem';

const DocList = (props) => {
  const { docs } = props;
  return (
    <DocItems>
      <Banner completed={props.completed}>{props.text}</Banner>
      {docs.map((doc) => (
        <DocItem
          key={doc.id}
          completed={props.completed}
          doc={doc}
          setCompleted={props.setCompleted}
          editdoc={props.edit}
        />
      ))}
    </DocItems>
  );
};
const DocItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default DocList;
