
import './App.css';
import BgChanger from './Components/BgChanger';
import Counter from './Components/Counter';
import Hooks from './Components/Hooks';
import Lists from './Components/Lists';
import Props from './Components/Props';
import RandomPass from './Components/RandomPass';
import Stoper from './Components/Stoper';
import TextCompo from './Components/TextCompo';
import UseEffect from './Components/UseEffect';



function App() {
  // const groom = "Vicky";
  // const bride = "kat";
  // const date = "20/10/2023";
  return (
    <div className="App">
      {/* <h1 className='text-success'>Hello</h1>
      <h2>{groom} weds {bride}</h2>
      <h2>{date} </h2> */}
      <BgChanger/>
      {/* <TextCompo/> */}
      {/* <Hooks/> */}
      {/* <Lists/> */}
      {/* <Props/> */}
      {/* <UseEffect/> */}
      {/* <Counter/> */}
      {/* <Stoper/> */}
      <RandomPass/>
    </div>
  );
}

export default App;