import './App.css';
import Greet from './Componenets/Greet';
import LightBulb from './Componenets/bulb';
import Counter from './Componenets/counter';
import StateTutorial from './Hooks/useState/useState';
import EffectTutorial from './Hooks/useEffect/useEffect';
import Component1 from './Hooks/useContext/PropDrilling/without-use-context';
import Component1A from './Hooks/useContext/PropDrilling/with-use-context';
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
        <Route exact path='/propdrilling/without' element={<Component1/>}/>
        <Route exact path='/propdrilling/with' element={<Component1A/>}/>
        
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
