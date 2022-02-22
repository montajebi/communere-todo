import React from 'react';
import cx from 'classnames';

type GridItemProps = {
  span?: string;
  start?: string;
  end?: string;
  children?: React.ReactNode;
  className?: string;
};

const Item = (props: GridItemProps) => {
  const { span, start, end, className, children } = props;

  const classNames = cx(
    { ['col-start-' + start]: start },
    { ['col-span-' + span]: span },
    { ['col-end-' + end]: end },
    className,
  );

  return <div className={classNames}>{children}</div>;
};

type GridContainerProps = {
  cols: string;
  gap: string;
  children?: React.ReactNode;
  className?: string;
};

const Container = (props: GridContainerProps) => {
  const { cols, gap, children, className } = props;

  const classNames = cx('grid', `grid-cols-${cols}`, `gap-${gap}`, className);

  return <div className={classNames}>{children}</div>;
};

const Grid = {
  Container,
  Item,
};

export default Grid;
