
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

const DemoCompopnent = (props) => {
  return (
    <div>
    <div>Day la tuoi : {props.age}</div>
    <div>Day la tuoi : {props.displayname}</div>

    </div>
  );
};

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Hien')

  const onIncreaseAge = () => {
    setAge(age +1 );
};

  return ( 
    <div className='containert'>
      <div>{age}</div>
      <div onClick={onIncreaseAge}>+1 gia tri </div>
      <DemoCompopnent age={age} displayname={name} />
    </div>
  );
  }
 

export default App;