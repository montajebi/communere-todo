import usePresistState from './hooks/usePresistState';
import TodoAdder, { Todo } from './components/todos/TodoAdder';
import { Flex, Grid, Margin } from './components/design-system';

const App = () => {
  const [todos, setTodos] = usePresistState('todos', []);

  const todoItems = todos.map((todo: Todo) => {
    return (
      <div className="border-solid rounded-md border-2 py-4 px-4 border-gray-20 text-gray-700">
        <Flex direction="row" justify="between">
          <div>{todo.title}</div>
        </Flex>
      </div>
    );
  });

  return (
    <div>
      <Margin top="10" />
      <Grid.Container cols="6" gap="4">
        <Grid.Item start="2" span="4">
          <TodoAdder onAddTodo={(newTodo) => setTodos([newTodo, ...todos])} />

          <div className="mt-5"></div>
          <Flex gap="4" direction="col" justify="center">
            {todoItems}
          </Flex>
        </Grid.Item>
      </Grid.Container>
    </div>
  );
};

export default App;
