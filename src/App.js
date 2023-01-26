
import './App.css';
import Click from './hoc/Click';
import Hover from './hoc/Hover';

function App() {
  return (
    <>
    
      <h2 className='heading'>
        Higher Order component
      </h2>
  <Click/>
  <br></br>
  <Hover/>
   
    </>
  );
}

export default App;
