
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="page-content">
        <AppRouter />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

