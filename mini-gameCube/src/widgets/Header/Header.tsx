import { Button } from '@/shared/components/Button/Button';
import './Header.css';
export const Header = () => {
   return (
      <header className="header">
         <span>Test Game</span>
         <div className="header__buttons">
            <Button>Вход</Button>
            <Button>Регистрация</Button>
         </div>
      </header>
   );
};
