import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import { About } from './components/about/About'


function App() {

    return(
        <>
            <Header/>

            <main className="main">
                <Home/>
                <About/>
            </main>
        </>
    );

}

export default App
