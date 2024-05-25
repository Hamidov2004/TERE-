import './App.css';
import './Responsive.css'
import Footer from './Project2_component/Footer';
import Home from './Project2_component/Home';
import Navbar from './Project2_component/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


function App() {
   fetch(`YOUR-API`)
   .then(response => response.json())
   .catch(err => {
   console.log(err);
    });
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
