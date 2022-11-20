import React from 'react'

function Pagination({TutorialsPerPage, totalTutorials, paginate}) {
    const pageNumbers = [];
    for( let i=1 ; i <= Math.ceil(totalTutorials / TutorialsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div className='block'>
        <ul className='pagination mb-4 mt-5'>
            { pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a href="#" onClick={() => paginate(number)} className='page-link'> {number} </a>
                </li>
            ))}
            
        </ul>
    </div>
    
  )
}

export default Pagination