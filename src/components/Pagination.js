import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }
  return (
    <nav className='my-5'>
      <ul className='pagination justify-content-center'>
        {
          prev ?(
          <li className='page-item'>
            <button className='page-link btn btn-sm bg-dark text-white' onClick={handlePrevious}>Previous</button>
          </li>
          
          ):null}
          {
            next ?(
            <li className='page-item mx-1'>
              <button className='page-link btn btn-sm bg-dark text-white' onClick={handleNext}>Next</button>
           </li>
             ) : null}


      </ul>
    </nav>
  )
}

export default Pagination