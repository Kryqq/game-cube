import './LogIn.css';
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { XCross } from '@components/SvgComponents/XCross';

export const LogIn = () => {
   return (
      <div className="logIn">
         <XCross />
         <Input error placeholder="Login"></Input>
         <Input placeholder="Password" type="password"></Input>
         <Button evenOdd>Войти</Button>
      </div>
   );
};
