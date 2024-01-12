import React from 'react';
import profile from '../../_assets/images/slider-img.png';
import { useSelector } from 'react-redux';
import { store } from '../../_store/store';
import { withdrawMoney, depositMoney } from '../../_store/Actions';

const AcoountBalance = () => {

  const {balance, ownername} = useSelector((state) => state.practiceob);

  const withdraw = (e) => {
    e.preventDefault();
    let value = e.target.dataset.value;
    store.dispatch(withdrawMoney(value));
  }

  const deposite = (e) => {
    e.preventDefault();
    let value = e.target.dataset.value;
    store.dispatch(depositMoney(value));
  }


  return (
    <>
      <div className='top valuet'>
        <div className='profileimg'>
          <img src={profile} alt='profile' />
        </div>
        <h3 className='acoountName'>{ownername}</h3>
      </div>
      <div className='position-relative'>
        <div className='value valuet'>
          <h4 className='amount'>${balance}</h4>
          <h6 className='valyetitel'>Total Amount</h6>
        </div>
      </div>
      <div className='bottom valuet'>

        <div className='buttongroup mb-3'>
          <a data-value="10000" onClick={withdraw} class="btn btn-primary no-animate me-4">Withdraw $10000</a>
          <a data-value="5000" onClick={withdraw} class="btn btn-primary no-animate">Withdraw $5000</a>
        </div>    
        <div className='buttongroup'>
          <a data-value="10000" onClick={deposite} class="btn btn-primary no-animate me-4">Deposite $10000</a>
          <a data-value="5000" onClick={deposite} class="btn btn-primary no-animate">Deposite $5000</a>
        </div>
        <a data-value={balance} onClick={withdraw} className='givechar'>Give away all your cash to charity</a>
      </div>
    </>
  )
}

export default AcoountBalance;