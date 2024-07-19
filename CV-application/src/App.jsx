import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/GeneralInfo'
import Education from './components/EducationInfo'
import Experience from './components/Experience'

export default function App() {

  return (
    <>
      <General />
      <Education />
      <Experience />
    </>
  )
}

