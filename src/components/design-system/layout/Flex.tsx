import cx from 'classnames';
import { ReactNode } from 'react';

declare type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';

declare type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

type FlexProps = {
  direction?: FlexDirection;
  justify?: JustifyContent;
  children?: ReactNode;
  gap?: string;
};

const Flex = (props: FlexProps) => {
  const { direction = 'col', justify = 'start', children, gap = '0' } = props;

  let gapKey = '';
  if (direction.startsWith('row')) {
    gapKey = 'x';
  } else if (direction.startsWith('col')) {
    gapKey = 'y';
  }

  const classNames = cx(
    'flex',
    `flex-${direction}`,
    `justify-${justify}`,
    `space-${gapKey}-${gap}`,
  );

  return <div className={classNames}>{children}</div>;
};

export default Flex;
