import './App.css';
import Greet from './Componenets/Greet';
import LightBulb from './Componenets/bulb';
import Counter from './Componenets/counter';
import StateTutorial from './Hooks/useState/useState';
import EffectTutorial from './Hooks/useEffect/useEffect';
import Component1 from './Hooks/useContext/PropDrilling/without-use-context';
import Component1A from './Hooks/useContext/PropDrilling/with-use-context';
import ContextTutorial from './Hooks/useContext/context';
import styleMaster from './Componenets/style/c';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BasicButtons from './MaterialUI/basicbuttons'
import BasicModal from './MaterialUI/modal';
import SignupForm from './Login/Formic/formic';
import ValidationSchemaExample from './Login/Formic/yupFormik';



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
        <Route exact path='/usercontext' element={<ContextTutorial/>}/>
        <Route exact path='/stylemaster' element={<styleMaster/>}/>
        <Route exact path='/basicbuttons' element={<BasicButtons/>}/>
        <Route exact path='/basicmodal' element={<BasicModal/>}/>
        <Route exact path='/formik' element={<SignupForm/>}/>
        <Route exact path='/yupformik' element={<ValidationSchemaExample/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
