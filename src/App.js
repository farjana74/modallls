import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Solution from './Pages/Home/Solution/Solution';
import Development from './Pages/Home/Development/Development';
import Security from './Pages/Home/Security/Security';
import Footer from './Pages/Shared/Footer/Footer';
import Footers from './Pages/Shared/Footers/Footers';
import Practise from './Pages/Practise/Practise';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className='all-serv'>
     
      <Banner></Banner>
      <br />
      <br />
      {/* <Solution></Solution> */}
      <br />
      <br />
      <Development></Development>
      <br />
      <br />
      {/* <Security></Security> */}
      <br />
      <br />
      <Contact></Contact>
      <br />
      <br />



      <Footer></Footer>
      <Footers></Footers>
    </div>
  );
}

export default App;
