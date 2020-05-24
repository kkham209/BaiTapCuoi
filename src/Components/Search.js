import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
  render() {
    return (
      <Container>
        <InputSearch placeholder='nhap thong tin can tim'></InputSearch>
        <ButtonSearch> Search </ButtonSearch>
      </Container>
    );
  }
}

export default Search;

const Container = styled.div`
  margin-top: 2rem;
  width: 960px;
  height: auto;
  text-align: center;
  margin-bottom: 3rem;
  background: #fce730;
  margin: 0 auto;
  margin-top: 1rem;
`;

const InputSearch = styled.input`
  height: 2rem;
  width: 15rem;
  line-height: 1.5rem;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
`;

const ButtonSearch = styled.button`
  border: none;
  background: black;
  color: white;
  width: 5rem;
  padding: 5px 10px;
  margin-left: 2rem;
`;
