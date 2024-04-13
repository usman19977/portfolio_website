import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    )
}
