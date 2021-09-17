import './App.css';
import Dashboard from './dashboard';
import SignUp from './signUp';
import {useStateValue} from './StateProvider';


function App() {
  const [{user},dispatch] = useStateValue();

  
   return (
    <div className="App">
    
   {!user?(<SignUp/>):(
     <>
      <Dashboard/>
     </>
   )}
   
    </div>

   

     
  );
}

export default App;
