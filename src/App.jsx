import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { useDentistStates } from './Context/DentistContext';

function App() {
  const { state } = useDentistStates();
  return (
    <div className={`App ${state.theme}`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/dentist/:id' element={<Detail />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
