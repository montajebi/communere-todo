import cx from 'classnames';
import moment from 'moment';
import { useMemo } from 'react';
import { Flex } from '../../../components/design-system';

interface TodoCardProps {
  title: string;
  createdDate: Date;
  done: boolean;
  id: string;
  onDoneClick?: () => void;
  onDeleteClick?: () => void;
}

const TodoCard = (props: TodoCardProps) => {
  const { title, id, createdDate, done, onDeleteClick, onDoneClick } = props;

  const dateText = useMemo(() => moment(createdDate).fromNow(), [createdDate]);

  const classNmaes = cx(
    'border-solid rounded-md border-2 py-4 px-4 border-gray-20 text-gray-700',
    'te',
  );

  const titleClassNames = cx('font-medium', {
    'line-through': done,
  });

  const doneText = done ? 'Un done' : 'Done';

  return (
    <div id={`todo-${id}`} className={classNmaes}>
      <Flex direction="col" gap="3">
        <Flex direction="row" justify="between">
          <p className={titleClassNames}>{title}</p>
          <div className="text-sm ont-light text-gray-400">{dateText}</div>
        </Flex>

        <Flex direction="row" justify="start" gap="2">
          <span
            onClick={onDoneClick}
            className="text-green-600 text-xs hover:cursor-pointer">
            {doneText}
          </span>
          <span
            onClick={onDeleteClick}
            className="text-red-600 text-xs hover:cursor-pointer">
            Delete
          </span>
        </Flex>
      </Flex>
    </div>
  );
};

export default TodoCard;
