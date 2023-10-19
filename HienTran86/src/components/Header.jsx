/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../store/reducers/home';



function Header() {

   const  homeStore = useSelector((state) => state.home);
   const dispatch = useDispatch();
   console.log(222, homeStore)

   const handleOnLogin  = () => {
    dispatch(setIsLogin(true));
   
   }
   const handleOnLogout  = () => {
    dispatch(setIsLogin(false));
  
   }

   return homeStore.isLogin ? (
    <header>
        this is navbar <button onClick={handleOnLogout}>logout</button>
    </header>
   ) : (
    <button onClick={handleOnLogin}>Login</button>
   );
}

export default Header;