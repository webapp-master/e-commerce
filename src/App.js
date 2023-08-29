import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <main>
          <Container>
            <HomeScreen/>  

          </Container>
        </main>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
