import cx from 'classnames';
import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
  label?: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  error?: string;
}

const Input = (props: InputProps) => {
  const {
    name,
    label,
    type = 'text',
    placeholder,
    error,
    value,
    onChange,
  } = props;

  const inputClassName = cx(
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline',
    { 'border-red-500': error },
  );

  const lableComponent = label ? (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={name}>
      {label}
    </label>
  ) : null;

  const inputComponent = (
    <input
      style={{ display: 'inline-block' }}
      name={name}
      className={inputClassName}
      id={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

  const errorComponent = error ? (
    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
  ) : null;

  return (
    <>
      {lableComponent}
      {inputComponent}
      {errorComponent}
    </>
  );
};

export default Input;
