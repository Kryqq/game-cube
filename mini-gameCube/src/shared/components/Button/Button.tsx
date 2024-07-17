import clsx from 'clsx';
import './Button.css';
import '@typography/Typography.css';
type ButtonPropsType = {
   disabled?: boolean;
   evenOdd?: boolean;
   specificNumber?: boolean;
   bet?: boolean;
   onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, evenOdd, specificNumber, bet, disabled, onClick }: ButtonPropsType) => {
   const buttonClasses = clsx('button', {
      even__odd: evenOdd,
      'specific__number  ': specificNumber,
      bet: bet,
      'font-inter': true,
      'font-16-regular': true,
      disabled__button: disabled,
   });

   const handleClick = () => {
      onClick();
   };

   return (
      <button onClick={handleClick} disabled={disabled} className={buttonClasses}>
         {children}
      </button>
   );
};
