import clsx from 'clsx';
import './Button.css';
import '@typography/Typography.css';
type ButtonPropsType = {
   evenOdd?: boolean;
   specificNumber?: boolean;
   bet?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, evenOdd, specificNumber, bet }: ButtonPropsType) => {
   const buttonClasses = clsx('button', {
      'even-odd': evenOdd,
      'specific-number': specificNumber,
      bet: bet,
      'font-inter': true,
      'font-16-regular': true,
   });

   return <button className={buttonClasses}>{children}</button>;
};
