import cx from 'classnames';

const Loader = () => {
  const baseClassnames = cx('h-2.5', 'w-2.5', 'bg-current', 'rounded-full');

  return (
    <div className="flex">
      <div className={cx(baseClassnames, 'animate-bounce400')} />
      <div className={cx(baseClassnames, 'ml-1', 'animate-bounce200')} />
      <div className={cx(baseClassnames, 'ml-1', 'animate-bounce')} />
    </div>
  );
};

export default Loader;
