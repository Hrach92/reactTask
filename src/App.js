import { Link, Route, Routes } from 'react-router-dom';
import app from './App.module.css';
import Exercise1 from './Exercises/Exercise1';
import Exercise2 from './Exercises/Exercise2';
import Exercise3 from './Exercises/Exercise3';
import Exercise4 from './Exercises/Exercise4';
import Exercise5 from './Exercises/Exercise5';
import Exercise6 from './Exercises/Exercise6';
import Exercise7 from './Exercises/Exercise7';
import Exercise8 from './Exercises/Exercise8';
import Exercise9 from './Exercises/Exercise9';

function App() {
  return <div>
    <div className={app.link}>
      <Link to='Exercise1'>Exercise1</Link>
      <Link to='Exercise2'>Exercise2</Link>
      <Link to='Exercise3'>Exercise3</Link>
      <Link to='Exercise4'>Exercise4</Link>
      <Link to='Exercise5'>Exercise5</Link>
      <Link to='Exercise6'>Exercise6</Link>
      <Link to='Exercise7'>Exercise7</Link>
      <Link to='Exercise8'>Exercise8</Link>
      <Link to='Exercise9'>Exercise9</Link>
      </div>
    <div>
      <Routes>
        <Route path='Exercise1' element={<Exercise1/>}/>
        <Route path='Exercise2' element={<Exercise2/>}/>
        <Route path='Exercise3' element={<Exercise3/>}/>
        <Route path='Exercise4' element={<Exercise4/>}/>
        <Route path='Exercise5' element={<Exercise5/>}/>
        <Route path='Exercise6' element={<Exercise6/>}/>
        <Route path='Exercise7' element={<Exercise7/>}/>
        <Route path='Exercise8' element={<Exercise8/>}/>
        <Route path='Exercise9' element={<Exercise9/>}/>
      </Routes>
    </div>
  </div>
}

export default App;
