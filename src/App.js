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
import Pagination from './Componenets/Pagination/pagination';
import { MuiTable } from './Componenets/MUI_Tables/MuiTable';
import BasicTable from './Componenets/table/BasicTable';
import SortingTable from './Componenets/table/SortingTable';


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
        <Route exact path='/pagination' element={<Pagination/>}/>
        <Route exact path='/muitable' element={<MuiTable/>}/>
        <Route exact path='/basictable' element={<BasicTable/>}/>
        <Route exact path='/sortingtable' element={<SortingTable/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
