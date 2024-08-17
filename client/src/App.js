import logo from './logo.svg';
import './App.css';
import SelectSection from './components/SelectSection';

function App() {
  return (
    <div className="App">
      <header className="">
      <h1>notification App</h1>
      <p>Select the section</p>
      <SelectSection/>
      </header>
    </div>
  );
}

export default App;
