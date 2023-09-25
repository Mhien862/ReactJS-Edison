
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const onLoginClick = () => {
    console.log("onLoginClick");
    setIsLogin(true);
  };

  const onLogoutClick = () => {
    console.log("onLoginClick");
    setIsLogin(false);
  };

    
    
   return (
   <div>
    <Header isLogined={isLogin} 
    onLogin={onLoginClick}
    onLogout={onLogoutClick}/>
    <Main/>
    <Footer/>        
   </div>
   );
}

export default App;