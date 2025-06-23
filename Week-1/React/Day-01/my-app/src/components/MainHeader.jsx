import React from 'react'
// import '../'

function MainHeader(){
  return (
    
        <div className='header'>
        <div>
          <h3>
            Harshal Yadav
          </h3>
        </div>
        <div>
          <h3>
            Welcome to my React Profile!
          </h3>

        </div>
        <div>{new Date().getDate()}/ {new Date().getMonth()}/ {new Date().getFullYear()}</div>
      </div>
  )
}

export default MainHeader