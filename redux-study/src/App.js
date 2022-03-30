import './App.css';
import ConterContainer from './containers/CounterContainer';
import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <ConterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
}

export default App;
