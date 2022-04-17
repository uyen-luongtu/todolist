import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './pages/ToDoList/styles/GlobalStyle'
import Todolist from './pages/ToDoList/Todolist';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Todolist />
    </div>
  );
}

export default App;
