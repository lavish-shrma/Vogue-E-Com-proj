
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Home from './Home';
import './index.css';
import Fashion from './Fashion';
import Runway from './Runway';
import Podcast from './Podcast';
import Beauty from './Beauty';
import Aos from 'aos';
const App = ()=> {
  return (
    
    <>
    <Navbar/>
    <Routes>

<Route path="/" element={<Home></Home>}/>
<Route path="/AboutUs" element={<AboutUs></AboutUs>}/>
<Route path="/Fashion" element={<Fashion></Fashion>}/>
<Route path="/Runway" element={<Runway></Runway>}/>
<Route path="/Beauty" element={<Beauty></Beauty>}/>
<Route path="/Podcast" element={<Podcast></Podcast>}/>

    </Routes>
    
    </>
  );
};

export default App;
