import { Route, Routes } from 'react-router-dom';

import Home from '../src/components/pages/Home'
import Company from '../src/components/pages/Company'
import Contact from '../src/components/pages/Contact'
import NewPacient from '../src/components/pages/NewPacient'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar'
import Pacient from './components/pages/Pacient';
import PacientEdit from './components/pacient/PacientEdit';
import NewMedicines from './components/pages/NewMedicines';
import Medicines from './components/pages/Medicines';
import MedicineEdit from './components/medicines/MedicineEdit';
import PatientScheduling from './components/pacient/PatientScheduling';
import PatientMedicine from './components/pacient/PatientMedicine';

// import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pacient' element={<Pacient />} />
          <Route path='/pacient-edit/:id' element={<PacientEdit />} />
          <Route path='/pacient-scheduling/:id' element={<PatientScheduling />} />
          <Route path='/pacient-medicine/:id' element={<PatientMedicine />} />
          <Route path='/new-pacient' element={<NewPacient />} />
          <Route path='/new-medicines' element={<NewMedicines />} />
          <Route path='/medicines' element={<Medicines />} />
          <Route path='/medicine-edit/:id' element={<MedicineEdit />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/company' element={<Company />} />
        </Routes >
      </Container>
      <Footer />
    </>
  );
}

export default App;
