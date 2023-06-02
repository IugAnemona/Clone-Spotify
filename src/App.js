import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

function Home() {
  return (
    <div>
    <NavBar></NavBar>
    <Content></Content>
    <Footer></Footer>
    </div>
  );
}

export default Home;
