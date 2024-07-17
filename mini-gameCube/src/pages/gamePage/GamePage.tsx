import React from 'react';
import clsx from 'clsx';
import './GamePage.css';
import '@typography/Typography.css';
import useInterfaceStore from '@store/interfaceStore/interfaceStore';
import { GameInterface } from '@/widgets/GameInterface/GameInterface';
import { Header } from '@/widgets/Header/Header';
import { LogIn } from '@/widgets/LogIn/LogIn';
import { Cube } from '@/widgets/Cube/Cube';
import useGameStore from '@/shared/store/gameStore/gameStore';

export const GamePage = () => {
   const { loginWindowIsOpen, openLoginWindow, closeLoginWindow } = useInterfaceStore();
   const { face, result, betSize, initialBalance } = useGameStore();

   const setLoginHandler = () => {
      if (!loginWindowIsOpen) {
         openLoginWindow();
      } else {
         closeLoginWindow();
      }
   };

   return (
      <>
         <div className={clsx('content', { blurred: loginWindowIsOpen })}>
            <Header setLogin={setLoginHandler}></Header>
            <div className={clsx('result', { result, 'font__20-bold': true })}>
               <h2>Результат броска кубика: {face} </h2>
               {result ? <h3> Вы выиграли {Number(betSize) * 3}</h3> : <h3> Повезет в следующий раз!</h3>}
            </div>

            <Cube></Cube>
            <GameInterface />
         </div>
         {loginWindowIsOpen && <LogIn />}
      </>
   );
};
