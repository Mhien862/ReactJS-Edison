/* eslint-disable react/prop-types */


function Header(props) {

    console.log("props",props);    
    
    const handleLogin = () => {
        props.onLogin();
    };

    const handleLogout = () => {
        props.onLogout();
    };


   

    
    return props.isLogined ?
     (<header> this is navbar <button onClick={handleLogout}>logout</button></header>) : (
       <button onClick={handleLogin}> login</button> 
     ) ;
    
}

export default Header;