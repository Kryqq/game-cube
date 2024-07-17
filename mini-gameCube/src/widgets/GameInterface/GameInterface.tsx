import { BetSelector } from '@components/BetSelector/BetSelector';
import { Button } from '@components/Button/Button';

import './GameInterface.css';
import useGameStore from '@store/gameStore/gameStore';
import { Input } from '@components/Input/Input';
import React from 'react';

export const GameInterface = () => {
   const [value, setValue] = React.useState('1');

   const betOptions = {
      even: 'even',
      odd: 'odd',
      oneThree: '1to3',
      fourSix: '4to6',
      specificNumber: 'specificNumber',
   };

   const {
      addPointsToBalance,
      subtractPointsFromBalance,
      setFace,
      setRoll,
      setBetOption,
      roll,
      betSize,
      betOption,
      setReult,
   } = useGameStore();

   const defineGameResults = (betOption: string, face: number, betSize: number) => {
      if (betOption === betOptions.even && face % 2 === 0) {
         addPointsToBalance(betSize * 2);
         setReult('win');
      } else if (betOption === betOptions.odd && face % 2 !== 0) {
         addPointsToBalance(betSize * 2);
         setReult('win');
      } else if (betOption === betOptions.oneThree && face >= 1 && face <= 3) {
         addPointsToBalance(betSize * 2);
         setReult('win');
      } else if (betOption === betOptions.fourSix && face >= 4 && face <= 6) {
         addPointsToBalance(betSize * 2);
         setReult('win');
      } else if (betOption === betOptions.specificNumber && face === Number(value)) {
         addPointsToBalance(betSize * 3);
         setReult('win');
      } else {
         subtractPointsFromBalance(betSize);
         setReult('lose');
      }
   };

   const rollDice = () => {
      if (!roll) {
         setRoll(true);
         setTimeout(() => {
            const newFace = Math.floor(Math.random() * 6) + 1;
            setFace(newFace);
            setRoll(false);
            defineGameResults(betOption, newFace, Number(betSize));
         }, 2000);
      }
   };

   const handleBetSelection = (betType: string) => () => {
      setBetOption(betType);
   };

   const handleIputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const regex = /^[1-6]$/;

      if (regex.test(value)) {
         setValue(value);
      } else {
         setValue('');
      }
   };

   return (
      <div className="game__interface">
         <BetSelector />
         <span className="bet__variants">Варианты ставок</span>
         <div className="button__grid_containter">
            <Button disabled={roll} onClick={handleBetSelection(betOptions.even)} evenOdd>
               Четное
            </Button>
            <Button disabled={roll} onClick={handleBetSelection(betOptions.odd)} evenOdd>
               Нечетное
            </Button>
            <Button disabled={roll} onClick={handleBetSelection(betOptions.oneThree)} evenOdd>
               От 1 до 3
            </Button>
            <Button disabled={roll} onClick={handleBetSelection(betOptions.fourSix)} evenOdd>
               От 4 до 6
            </Button>
         </div>
         <div className="footer__buttons">
            <Button disabled={roll} onClick={handleBetSelection(betOptions.specificNumber)}>
               <span> Конкретное число</span>
               <Input
                  maxLength={1}
                  onChange={(e) => handleIputValueChange(e)}
                  specificNumber={true}
                  value={value}
               ></Input>
            </Button>
            <Button onClick={rollDice} bet>
               Сделать ставку
            </Button>
         </div>
      </div>
   );
};
