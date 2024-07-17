import './Input.css';
import '../../Typography/Typography.css';
import clsx from 'clsx';

type InputPropsType = {
   def?: boolean;
   focus?: boolean;
   disabled?: boolean;
   error?: boolean;
   options?: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ onChange, def, focus, disabled, error, placeholder, type }: InputPropsType) => {
   const inputClasses = clsx('input', {
      default: def,
      focus: focus,
      disabled: disabled,
      error: error,
      'font-inter': true,
      'font-16-regular': true,
   });

   return (
      <>
         <input
            disabled={disabled}
            type={type}
            className={inputClasses}
            onChange={onChange}
            placeholder={placeholder}
         ></input>
         {error ? <span className="error__text">Error</span> : null}
      </>
   );
};
