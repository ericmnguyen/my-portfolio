import './App.css';
import MainPage from './containers/MainPage';
import { Button } from 'antd';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className='App'>
      <MainPage />
      <Button type='primary'>Button</Button>
    </div>
  );
}

export default App;
