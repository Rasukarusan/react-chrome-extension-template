import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => {
  return (
    <div
      style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center' }}
    >
      This is React
    </div>
  )
}

const app = document.createElement('div')
document.body.prepend(app)
ReactDOM.render(<Main />, app)
