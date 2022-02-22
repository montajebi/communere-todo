import { useCallback, useMemo, useState } from 'react';
import { Button, Input } from '../../../components/design-system';
import { v4 as uuidV4 } from 'uuid';

export interface Todo {
  title: string;
  id: string;
  done: boolean;
  createdDate: Date;
}

interface TodoAdderProps {
  onAddTodo: (newTodo: Todo) => void;
}

const TodoAdder = (props: TodoAdderProps) => {
  const [todoTitle, setTodoTitle] = useState('');

  const createNewTodo = useCallback((title) => {
    const newTodo = {
      id: uuidV4(),
      title,
      done: false,
      createdDate: new Date(),
    };

    return newTodo;
  }, []);

  const onAddClick = useCallback(() => {
    props.onAddTodo(createNewTodo(todoTitle));
    setTodoTitle('');
  }, [todoTitle, createNewTodo, props]);

  const isButtonDisabled = useMemo(() => todoTitle.length <= 3, [todoTitle]);

  const error = useMemo(() => {
    if (todoTitle.length <= 3) {
      return 'Please enter more than 3 characters.';
    }

    return '';
  }, [todoTitle]);

  return (
    <>
      <Input
        name="todo"
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        label="TODO:"
        placeholder="Write your todo title here..."
        error={error}
      />

      <Button disabled={isButtonDisabled} onClick={onAddClick} block>
        Add Todo
      </Button>
    </>
  );
};

export default TodoAdder;
