import './App.css';
import Logo from './components/Logo';
import Task from './components/Task';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='tasks-main-list'>
        <h1>My Tasks</h1>
        <Task text='Learn React' />
      </div>
    </div>
  );
}

export default App;
