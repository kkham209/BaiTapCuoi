import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Welcome = (props) => {
  return (
    <Container>
      <Title> Quản lý Văn Bản Sở Van Hóa Thông Tin Lào </Title>
      <LoginButton>
        <Link to='/login'> Đăng nhập </Link>
      </LoginButton>
    </Container>
  );
};

export default Welcome;
const Container = styled.div`
  margin: 0 auto;
  width: min(100%, 960px);
  height: 300px;
  display: flex;
  flex-direction: column;
  background: #56ccf2;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin: 0 auto;
  margin-top: 1rem;
`;

const LoginButton = styled.button`
  background: #06effe;
  color: black;
  padding: 5px 10px;
  width: 4rem;
  margin: 0 auto;
  margin-top: 12rem;
`;
