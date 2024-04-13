import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'
import { Services } from './Components/Services/Services'
import { MyWork } from './Components/MyWork/MyWork'

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
        </div>
    )
}
