import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

import {TodoListContextProvider} from '~/Context/TodoListContext';

import Todo from './Screens/Todo';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;
