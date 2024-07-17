import React from 'react';
import clsx from 'clsx';
import './BetSelector.css';
import { useClickOutside } from '@hooks/useClickOutside';

export const BetSelector = () => {
   const [selectedValue, setSelectedValue] = React.useState('');
   const [isOpen, setIsOpen] = React.useState(false);
   const ref = React.useRef(null);
   const options = ['1.00', '2.00', '3.00', '5.00', '10.00', '25.00', '60.00', '100.00'];

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const handleChange = (value: string) => {
      setSelectedValue(value);
      setIsOpen(false);
   };

   useClickOutside(ref, () => {
      if (isOpen) setIsOpen(false);
   });

   return (
      <div className="bet__selector">
         <label className="bet__selector_label">
            Размер ставки
            <div className="custom__select_container" onClick={handleToggle}>
               <div ref={ref} className="custom-select">
                  {selectedValue ? selectedValue : '1.00'}
                  <span className={clsx('arrow', { up: isOpen, down: !isOpen })}></span>
               </div>
               {isOpen && (
                  <ul className={clsx('options', { show: isOpen })}>
                     {options.map((value, index) => (
                        <li key={index} onClick={() => handleChange(value)}>
                           {value}
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </label>
      </div>
   );
};
