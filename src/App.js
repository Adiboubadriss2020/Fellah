import  Home  from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/signle/Single';
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { userinput, bovininput } from '../src/inputdata';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dacrk" : "app"}>
     <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      
      <Route path='fournisseurs'>
          <Route index element={<List/>}/>
          <Route path=':fournisseursId' element={<Single/>}/>
          <Route path='new' element={<New inputs={userinput} title="Add new user"/>}/>
      </Route>
      
      <Route path='Bovin'>
          <Route index element={<List/>}/>
          <Route path=':BovinId' element={<Single/>}/>
          <Route path='new' element={<New inputs={bovininput} title="Add new Bovin"/>}/>
      </Route>

      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
