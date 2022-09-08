import logo from './logo.svg';
import './App.css';
import WithFuctionComponent from './components/WithFuctionComponent';
import WithClassComponent from './components/WithClassComponent';

function App() {
  return (
    <div className="App">
      <h3>Realtime Clock With Class Component :</h3>
      <WithClassComponent/>
      <h3>Realtime Clock With Fuction Component :</h3>
      <WithFuctionComponent/>
    </div>
  );
}

export default App;
