import react,{ useState}from 'react';
import './App.css';
import Auth from './components/Auth'
import Hello from './components/Hello';


import Cookies from 'universal-cookie';
const cookies=new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  if(!isAuth){
    return(
      <Auth setIsAuth={setIsAuth}/>
    )
  }
  // console.log(cookies.get("auth-token"))
  return (
    <div className="App">
      <Hello isAuth={isAuth} setIsAuth={setIsAuth}/>
    </div>
  );
}

export default App;
