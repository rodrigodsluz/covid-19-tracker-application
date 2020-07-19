import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

//Class-based component
class App extends React.Component{
  //render returns a React component to be rendered
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App
