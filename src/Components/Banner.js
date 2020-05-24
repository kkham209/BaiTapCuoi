import React from 'react';
import styled from 'styled-components';

const Banner = (props) => {
  return (
    <BannerWrapper completed={props.completed}>{props.children}</BannerWrapper>
  );
};
const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.2rem;
  background-color: ${(props) => (props.completed ? 'yellow' : 'blue')};
  width: min(90%, 350px);
  height: 30px;
  opacity: 0.8;
`;
export default Banner;
