import {Logo,Menu,Button} from './components/Navbar'
import './App.css'
import Wordlab from './components/Wordlab';
const l2 = "Projects"
function App() {
  return (
    <>
    <div className="navbar">
        <Logo/>
        <Menu l1="Services" l2={l2} l3="About"/>
        <Button/>
    </div>
    <Wordlab/>
    </>
  );
}

export default App;
