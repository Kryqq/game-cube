import './Input.css';
import '../../Typography/Typography.css';
import clsx from 'clsx';

type InputPropsType = {
   def?: boolean;
   focus?: boolean;
   disabled?: boolean;
   error?: boolean;
   options?: string[];
   specificNumber?: boolean;
   maxLength?: number;
   value?: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
   onChange,
   def,
   focus,
   disabled,
   error,
   placeholder,
   type,
   specificNumber,
   maxLength,
   value,
}: InputPropsType) => {
   const inputClasses = clsx('input', {
      default: def,
      focus: focus,
      disabled: disabled,
      error: error,
      font__inter: true,
      'font__16-regular': true,
      'specific__number-input': specificNumber,
   });

   return (
      <>
         <input
            maxLength={maxLength}
            disabled={disabled}
            type={type}
            className={inputClasses}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
         ></input>
         {error ? <span className="error__text">Error</span> : null}
      </>
   );
};
