import { BetSelector } from '@components/BetSelector/BetSelector';
import { Button } from '@components/Button/Button';

import './GameInterface.css';
export const GameInterface = () => {
   return (
      <div className="game__interface">
         <BetSelector />
         <span className="bet__variants">Варианты ставок</span>
         <div className="button__grid_containter">
            <Button evenOdd>Четное</Button>
            <Button evenOdd>Нечетное</Button>
            <Button evenOdd>От 1 до 3</Button>
            <Button evenOdd>От 4 до 6</Button>
         </div>
         <div className="footer__buttons">
            <Button specificNumber>Конкретное число</Button>
            <Button bet>Сделать ставку</Button>
         </div>
      </div>
   );
};
