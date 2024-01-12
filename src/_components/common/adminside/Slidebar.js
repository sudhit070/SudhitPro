import React from 'react'
import headlogo from '../../../_assets/images/black-logo.png'
import { Totalskypeuser } from '../../skype/Totalskypeuser'
import { Link } from 'react-router-dom'


export const Slidebar = () => {


  return (
    <div className='slidebar'>
      <div className='logo'>
        <Link to="/">
          <img src={headlogo} width="200" className='slidelog' />
        </Link>
      </div>
      <Totalskypeuser  />
    </div>
  )
}
