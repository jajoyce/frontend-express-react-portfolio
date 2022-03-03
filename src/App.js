import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

function App() {
  const URL="https://jaj-backend-express-react.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Outlet context={URL}/>
      <Footer />
    </div>
  );
}

export default App;
