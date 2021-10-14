import './App.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <h1>WEB DEV PROJECT IDEAS</h1>
        <ul>
          {data.map((idea, key) => {
            return(
              <li>{idea}</li>
            )
          })}
        </ul>
    </div>
  );
}

export default App;
