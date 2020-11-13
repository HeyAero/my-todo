import './App.scss';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center py-2'>My Todo</h1>
      <Tasks />
      <div className='container'></div>
    </div>
  );
}

export default App;
