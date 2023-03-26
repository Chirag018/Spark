import React from 'react'
import mainLogo from '../src/images/mainLogo.jpg'

function Dashboard() {
  return (
    <>
    <span className='staking'>Staking</span>
    <div className='dasboardImage'>
        <img src={mainLogo} alt="" />
        <img src={mainLogo} alt="" />
        <img src={mainLogo} alt="" />

        <div className='first'>
            <input type="number" name="2" id="" placeholder='Enter token id' />
        <button className='stake1'>Staking</button>
        <button>UnStaking</button>
        </div>

       
    </div>
    </>
  )
}

export default Dashboard