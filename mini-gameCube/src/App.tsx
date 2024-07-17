import './App.css';
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';

import { Header } from '@widgets/Header/Header';
import { GameInterface } from '@widgets/GameInterface/GameInterface';

function App() {
   //hover na xCross
   
   // input disabled

   return (
      <div className="App">
         <Header></Header>
         <Button onClick={() => console.log('clicked')} specificNumber>
            <span> Конкретное число </span>
            <span> 1 </span>
         </Button>

         <Button onClick={() => console.log('clicked')} evenOdd>
            Чётное
         </Button>
         <Button onClick={() => console.log('clicked')} bet>
            Сделать ставку
         </Button>
         <Input placeholder="Login"></Input>
         <Input placeholder="Password"></Input>

         {/* <LogIn></LogIn> */}
         <GameInterface />
      </div>
   );
}

export default App;
