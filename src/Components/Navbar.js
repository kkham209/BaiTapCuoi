import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { fakeAuth } from '../Auth/Auth';

const Navbar = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <Container>
      <Branch>KhanKham</Branch>
      <ListCategory>
        <Item>
          <Link to='/home'>Trang chủ</Link>
        </Item>
        <Item>
          <Button
            onClick={() => {
              fakeAuth.signout(() => history.push('/'));
            }}
          >
            Đăng xuất
          </Button>
        </Item>
      </ListCategory>
    </Container>
  ) : (
    <Container>
      <Branch>KhanKham</Branch>
      <ListCategory>
        <Item>
          <Link to='/home'> Trang chủ </Link>
        </Item>
        <Item>
          <Link to='/login'> Đăng nhập </Link>
        </Item>
      </ListCategory>
    </Container>
  )
);
export default Navbar;

const Container = styled.div`
  width: min(100%, 960px);
  height: 90px;
  background: blue;
  display: flex;
  flex-wrap: inherit;
  flex-direction: row;
  margin: 0 auto;
`;

const Branch = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-top: 2rem;
  margin-left: 2rem;
`;
const ListCategory = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.2rem;
  background: transparent;
  margin-left: auto;
  margin-right: 2rem;
`;
const Item = styled.li`
  text-decoration: none;
  margin-left: 1rem;
  border: 1px solid yellow;
  padding: 5px 10px;
  &:hover {
    background: red;
  }
`;

const Button = styled.button`
  margin-left: 1rem;
  border: 1px solid red;
  padding: 5px 10px;
  &:hover {
    background: yellow;
  }
  background: none;
  border: none;
  color: green;
  font-size: 1rem;
`;
