import './App.css';
import Content from './components/Content';
import Header from './components/Header.jsx'
import NavContext from './components/NavContext';
function App() {
  return (
      <NavContext>
        <Header/>
        <Content/>
      </NavContext>
  );
}

export default App;
