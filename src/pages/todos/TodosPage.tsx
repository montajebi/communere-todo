import usePresistState from '../../hooks/usePresistState';
import TodoAdder, { Todo } from './components/TodoAdder';
import TodoCard from './components/TodoCard';
import { Flex, Grid, Margin } from '../../components/design-system';
import { useCallback } from 'react';

const TodosPage = () => {
  const [todos, setTodos] = usePresistState('todos', []);

  console.log(todos);

  const deleteTodo = useCallback(
    (id) => {
      const newList = todos.filter((todo: Todo) => todo.id !== id);

      setTodos([...newList]);
    },
    [todos, setTodos],
  );

  const doneTodo = useCallback(
    (id) => {
      const newList = todos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

      setTodos([...newList]);
    },
    [todos, setTodos],
  );

  const todoItems = todos.map((todo: Todo) => {
    return (
      <TodoCard
        key={todo.id}
        id={todo.id}
        title={todo.title}
        createdDate={todo.createdDate}
        done={todo.done}
        onDeleteClick={() => deleteTodo(todo.id)}
        onDoneClick={() => doneTodo(todo.id)}
      />
    );
  });

  return (
    <div>
      <Margin top="10" />
      <Grid.Container cols="6" gap="4">
        <Grid.Item start="2" span="4">
          <Flex gap="4" direction="col">
            <TodoAdder onAddTodo={(newTodo) => setTodos([newTodo, ...todos])} />

            {todoItems}
          </Flex>
        </Grid.Item>
      </Grid.Container>
    </div>
  );
};

export default TodosPage;
