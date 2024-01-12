import React from 'react'
import { store } from '../_store/store'
import { setTechnology } from '../_store/Actions'
import { useSelector } from 'react-redux'


const dispatchtechnology = (e) => {
    let technology = e.target.dataset.tech;
    // console.log(technology)
    store.dispatch(setTechnology(technology));
}


const ButtonGroup = ({ buttonarry }) => {
    return <>{
        buttonarry.map((item, index) => (
            <button data-tech={item} onClick={dispatchtechnology} className='btn btn-primary no-animate me-3' key={`btn-${index}`}>{item}</button>
        ))
    }</>
}

const Practice = () => {

    const {text} = useSelector((state) => state.practiceob);

    return (
        <div className='py-5 container'>
            <h3 className='text-show mb-4'>Hello Everyone, <br />We start to study <strong>{text}</strong>!</h3>
            <ButtonGroup buttonarry={["React", "JavaScript", "Python"]} />
        </div>
    )
}

export default Practice;

