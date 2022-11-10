import logo from './logo.svg';
import './App.css';
import './Components/Title'
import Title from './Components/Title/Title';

function App() {
  const lists =["God of war", "GTA V", "Resdient Evil"]
  return (
    <div className="App">
      <header className="App-header">
        <Title title='Titulo desde el componente padre' list={lists}/>
{/*         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */}      </header>
    </div>
  );
}

export default App;
