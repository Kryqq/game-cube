import React from 'react';
import './Cube.css';
import clsx from 'clsx';
import { Points } from '@components/SvgComponents/Points/Points';
import useGameStore from '@store/gameStore/gameStore';
export const Cube = () => {
   const { roll, face } = useGameStore();

   return (
      <>
         <div className="cube__container">
            {roll ? (
               <>
                  <div className={clsx('cube', `show-${face}`, { roll })}>
                     <div className="face face__front">
                        {[1].map((point) => (
                           <Points key={point} />
                        ))}
                     </div>
                     <div className="face face__back">
                        <div className="points-container">
                           {[1, 2].map((point) => (
                              <Points key={point} />
                           ))}
                        </div>
                     </div>
                     <div className="face face__left">
                        <div className="points-container">
                           {[1, 2, 3].map((point) => (
                              <Points key={point} />
                           ))}
                        </div>
                     </div>
                     <div className="face face__right">
                        <div className="points-container">
                           {[1, 2, 3, 4].map((point) => (
                              <Points key={point} />
                           ))}
                        </div>
                     </div>
                     <div className="face face__top">
                        <div className="points-container">
                           {[1, 2, 3, 4, 5].map((point) => (
                              <Points key={point} />
                           ))}
                        </div>
                     </div>
                     <div className="face face__bottom">
                        <div className="points-container">
                           {[1, 2, 3, 4, 5, 6].map((point) => (
                              <Points key={point} />
                           ))}
                        </div>
                     </div>
                  </div>
               </>
            ) : (
               <div className="face face__front">
                  <div className="points-container">
                     {[...Array(face)].map((_, index) => (
                        <Points key={index} />
                     ))}
                  </div>
               </div>
            )}
         </div>
      </>
   );
};
