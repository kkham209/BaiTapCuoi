import React from 'react';
import styled from 'styled-components';
import { fakeAuth } from '../Auth/Auth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/home' },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <ContainerLogin>
        <Title> Đăng nhập </Title>
        <Title> Tên đăng nhập </Title> <InputText></InputText>
        <Title> Mật khẩu </Title> <InputText type='password'></InputText>
        <Button onClick={this.login}> Đăng nhập </Button>
      </ContainerLogin>
    );
  }
}

export default Login;

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 350px);
  height: auto;
  background: #56ccf2;
  border-radius: 5px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 5rem;
`;

const Title = styled.label`
  color: white;
  font-size: 15px;
  margin: 0 auto;
  margin-top: 0.5rem;
`;

const InputText = styled.input`
  line-height: 2rem;
  width: min(90%, 350px);
  color: gray;
  height: 20px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #06effe;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  width: 3rem;
  margin: 0 auto;
  border: none;
  text-align: center;
  margin-top: 1rem;
`;
