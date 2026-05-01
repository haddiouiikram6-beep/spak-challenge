
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

import { ChallengeCard } from "./components/challenge-card";
import {Header} from "./components/header";
import { Historique } from "./components/historique";
import { Liste } from "./components/liste";

function App() {
  return (
    <main>
      <div className='bg-amber-100 '>
      <Header />
      <div className="max-w-9/12 mx-auto">
        <ChallengeCard />
        
      </div >
      <Liste />
      <div className='flex justify-between w-11/12 mx-auto my-6 '>
      < Historique />
      <Calendar />
      </div>
</div>
    </main> 
  )
}

export default App;
