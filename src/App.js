import './App.css';
import Greet from './Componenets/Greet';
import LightBulb from './Componenets/bulb';
import Counter from './Componenets/counter';
import StateTutorial from './Hooks/useState/useState';
import EffectTutorial from './Hooks/useEffect/useEffect';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
       
    <Router>
    <div>
     
      <Routes>
        <Route exact path='/' element={<Greet/>}/>
        <Route exact path='/bulb' element={<LightBulb/>}/>
        <Route exact path='/counter' element={<Counter/>}/>
        <Route exact path='/usestate' element={<StateTutorial/>}/>
        <Route exact path='/useeffect' element={<EffectTutorial/>}/>
        
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
