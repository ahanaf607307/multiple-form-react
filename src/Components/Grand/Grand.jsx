import React from 'react'
import Cat from '../Cat/Cat'
import Fat from '../Fat/Fat'
import Mat from '../Mat/Mat'

function Grand() {
  return (
    <div>
        <div className='text-5xl font-bold text-center'>
            Grand
        </div>
        <div>
            <Cat/>
            <Fat/>
            <Mat/>
            
        </div>
    </div>
  )
}

export default Grand