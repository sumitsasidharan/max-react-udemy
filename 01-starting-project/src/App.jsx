
import Header from './components/Header';
import { EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
  

   return (
      <div>
         <Header /> 

         <main>
            <CoreConcepts />

            <Examples />
         </main>
      </div>
   );
}

export default App;
