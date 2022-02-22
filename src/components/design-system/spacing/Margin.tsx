import React from 'react';
import cx from 'classnames';

type Props = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  x?: string;
  y?: string;
  all?: string;
  children?: React.ReactNode;
};

const Margin = (props: Props) => {
  const { top, bottom, left, right, x, y, all, children } = props;

  const clasNames = cx(
    { ['mt-' + top]: top },
    { ['mb-' + bottom]: bottom },
    { ['ml-' + left]: left },
    { ['mr-' + right]: right },
    { ['mx-' + x]: x },
    { ['my-' + y]: y },
    { ['m-' + all]: all },
  );

  return <div className={clasNames}>{children}</div>;
};

export default Margin;
