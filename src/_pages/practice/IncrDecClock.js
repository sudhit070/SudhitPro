import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../_store/store';
import { discreseTime, increseTime } from '../../_store/Actions';

const IncrDecClock = () => {

  const { clock } = useSelector((state) => state.practiceob);

  const increstTime = (e) => {
    let time = e.target.dataset.time;
    store.dispatch(increseTime(time));
  }

  const decresTime = (e) => {
    let time = e.target.dataset.time;
    store.dispatch(discreseTime(time));
  }

  return (
    <div className='incrdeccont'>
      <div className='container py-5'>

      <h6 className='maintitle mt-5'>Total Time spent on the Project!</h6>
        <div className='clock_box'>
          <h6 className='title'>Active Section: {clock.activeSession}</h6>
          <div className='clock'>
            <div className='mibox'>
              <span className='days'>{clock.days}</span>
              <span className='title'>Days</span>
            </div>
            <span>:</span>
            <div className='mibox'>
              <span className='days'>{clock.hours}</span>
              <span className='title'>Hours</span>
            </div>
            <span>:</span>
            <div className='mibox'>
              <span className='days'>{clock.minutes}</span>
              <span className='title'>Minutes</span>
            </div>
            <span>:</span>
            <div className='mibox'>
              <span className='days'>{clock.seconds}</span>
              <span className='title'>Seconds</span>
            </div>
          </div>
        </div>

        <div className='linkContainer'>
          <a href='#' onClick={increstTime} data-time="20">Increse +20s</a>
          <a href='#' onClick={decresTime} data-time="20">Decrese -20s</a>
        </div>
      </div>
    </div>
  )
}

export default IncrDecClock;