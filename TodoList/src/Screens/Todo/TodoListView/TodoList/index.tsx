import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = styled(FlatList)``;

interface Props {}

const TodoList = ({}: Props) => {
  const {todoList, removeTodoList} = useContext<ITodoListContext>(
    TodoListContext,
  );

  return (
    <Container
      data={todoList}
      keyExtractor={(_, index) => {
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={todoList.length === 0 && {flex: 1}}
    />
  );
};

export default TodoList;
