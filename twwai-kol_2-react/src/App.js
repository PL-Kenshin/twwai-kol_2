import logo from './logo.svg';
import './App.css';
import Data from './components/data'
import LineChart from './components/lineChart'

function App() {
  return (
    <div className="App">
       <div>
        <div className="col-2">
            <Data/>
        </div>
        <div className="col-10">
          <LineChart/>
        </div>
    </div>
    </div>
  );
}

export default App;
