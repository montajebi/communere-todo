/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import cx from 'classnames';
import Loader from '../feedback/Loader';

const ButtonVariant = {
  primary: ' bg-blue-700 hover:bg-blue-900 text-gray-100 rounded-md',
  secondary: 'bg-cyan-500 hover:bg-cyan-600 text-white rounded-md',
  success: 'bg-green-600 hover:bg-green-700 text-white rounded-md',
};

const ButtonSize = {
  sm: 'px-4 py-2 text-sm font-normal',
  md: 'px-4 py-2 text-base font-base',
  lg: 'px-6 py-2 text-lg',
};

declare type HTMLButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  type?: HTMLButtonType;
  onClick?: () => void;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  size = 'md',
  variant = 'primary',
  type = 'button',
  children,
  block = false,
  loading = false,
  disabled = false,
  onClick = () => {},
}: ButtonProps) => {
  const classNames = cx(
    ButtonVariant[variant],
    ButtonSize[size],
    'disabled:opacity-20',
    {
      'w-full': block,
    },
  );

  const onButtonClick = useCallback(() => {
    if (loading) {
      return () => {};
    }

    return onClick();
  }, [loading, onClick]);

  const loaderComponent = (
    <div className={ButtonSize[size]}>
      <Loader />
    </div>
  );

  const output = loading ? loaderComponent : children;

  return (
    <button
      type={type}
      className={classNames}
      onClick={() => onButtonClick()}
      disabled={disabled}>
      <div className="flex justify-center">{output}</div>
    </button>
  );
};

export default Button;
