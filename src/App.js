import './App.scss';
import Task from './components/Task';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center py-2'>My To-do</h1>
      <Task />
      <div className='container'></div>
    </div>
  );
}

export default App;
