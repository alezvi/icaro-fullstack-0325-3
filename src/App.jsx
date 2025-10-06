import Navbar from './components/Navbar.jsx';
import Cards from './components/Cards.jsx';
import ParticipantsForm from './components/ParticipantsForm.jsx';

function App() {
  return (
  <>
    <Navbar />

    <div className="container">
      <ParticipantsForm />

      <Cards />
    </div>
  </>
  )
}

export default App
