import './App.css';
import MainPage from './containers/MainPage';
import 'antd/dist/reset.css';
import NavigationPanel from './containers/Menu';
import Expertise from './containers/Expertise';
import Projects from './containers/Projects';
import Contact from './containers/Contact';

function App() {
  return (
    <div className='App'>
      <NavigationPanel />
      <MainPage />
      <Expertise />
      <Projects />
      <Contact />
      {/* <Button type='primary' style={{ zIndex: '2' }}>Button</Button> */}
    </div>
  );
}

export default App;
