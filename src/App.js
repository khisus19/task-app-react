import './App.css';
import Logo from './components/Logo';
import TaskForm from './components/Form';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='tasks-main-list'>
        <h1>My Tasks</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
