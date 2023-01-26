
import './App.css';
import Click from './hoc/Click';
import Hover from './hoc/Hover';

function App() {
  return (
    
<div>
      <h2 className='heading'>
        Higher Order component
      </h2>
  <Click/>
  <br></br>
  <Hover/>
   </div>
    
  );
}

export default App;
