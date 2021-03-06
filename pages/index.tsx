import React from 'react'
import ThemeContext from '../Context/ThemeContext'
import { JobDB } from '../DB/JobDB'
import JobList from '../Components/JobList'

const App = () => (

  <ThemeContext>
    <JobList jobList={JobDB} />
  </ThemeContext>
)

export default App 
