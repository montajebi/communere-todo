import { useState } from 'react';
import Grid from './components/design-system/layout/Grid';
import Input from './components/design-system/data-entry/Input';
import Margin from './components/design-system/spacing/Margin';

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
        </Grid.Item>
      </Grid.Container>
    </div>
  );
};

export default App;
