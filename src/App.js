
import './App.css';
import Home from './Home';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Birthday Reminder</h1>
     <Home data={data}/>
    </div>
  );
}

export default App;
