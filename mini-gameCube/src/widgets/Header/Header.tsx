import { Button } from '@components/Button/Button';
import './Header.css';

type HeaderPropsType = {
   setLogin: () => void;
};

export const Header = ({ setLogin }: HeaderPropsType) => {
   return (
      <header className="header">
         <span>Test Game</span>
         <div className="header__buttons">
            <Button onClick={setLogin}>Вход</Button>
            <Button onClick={() => {}}>Регистрация</Button>
         </div>
      </header>
   );
};
