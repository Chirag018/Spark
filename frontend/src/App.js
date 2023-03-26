import './App.css';
// import nameLogo from './images/nameLogo'
import nameLogo from '../src/images/nameLogo.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaRocket} from 'react-icons/fa'

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
        <button className='dashboard'>Dashboard <AiOutlineArrowRight /></button>
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
    </main>
    </>
  );
}

export default App;
