import './App.css';
// import nameLogo from './images/nameLogo'
import nameLogo from '../src/images/nameLogo.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaRocket} from 'react-icons/fa'
import mainLogo from '../src/images/mainLogo.jpg'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <h2>hello</h2> */}
    <div className='navbar'>
      <div className="mainImage">
        <img src={nameLogo} alt="" />
      </div>

      <div className="buttons">
        <button className='Lite'>Lite <FaRocket size={14} /></button>
        <button className='dashboard'><Link to='/dashboard' className='linked'>Dashboard <AiOutlineArrowRight /> </Link></button>
      </div>
    </div>

    <main>
      <div className='center'>
        <span className='title'>Building <span className='names'>Staking</span>  Infrastructure</span>
      </div>

      <div className='content'>
      <p>The world's most advanced platform to start leveraging the full potential of NFT Staking.</p>
        <button>To be cont...</button>
      </div>

      <div className='valuesLocked'>
        <p>Total value Locked</p>
        <span>$208,155,220</span>
      </div>

      <div className="mainContent">
        <div>
          <span>Spark</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae? Incidunt quibusdam alias neque commodi quisquam molestiae ducimus odit beatae fugit, deserunt quasi quos temporibus a odio illo non vel.</p>
          <button><AiOutlineArrowRight />  Dashboard</button>
        </div>
        <img src={mainLogo} alt="" />
      </div>
    </main>
    </>
  );
}

export default App;
