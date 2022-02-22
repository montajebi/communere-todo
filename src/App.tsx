import { useState } from 'react';
import Grid from './components/design-system/layout/Grid';
import { Button, Input, Margin } from './components/design-system/';

const App = () => {
  const [todo, setTodo] = useState('');

  return (
    <div>
      <Margin top="10" />
      <Grid.Container cols="6" gap="4">
        <Grid.Item start="2" span="4">
          <Input
            name="todo"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            label="TODO:"
            placeholder="Write your todo title here..."
          />

          <Button disabled={todo.length <= 3} block>
            Add Todo
          </Button>
        </Grid.Item>
      </Grid.Container>
    </div>
  );
};

export default App;
