import React from 'react';
import './App.css';

import
{

Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Contents/Home.js';
import About from './Contents/About.js';
import Education from './Contents/Education.js';
import Skills from './Contents/Skills.js';
import Contact from './Contents/Contact.js';
export default function App() {
return (

<div className="App">
<Navbar />



{/* Route for Home.js contents */}
<Route exact path="/">
<Home />
</Route>
{/* Route for About.js contents */}
<Route path="/about">
<About />
</Route>
{/* Route for Education.js contents */}
<Route path="/education">
<Education />
</Route>
{/* Route for Skills.js contents */}
<Route path="/skills">
<Skills />
</Route>
{/* Route for Contact.js contents */}
<Route path="/contact">
    
<Contact />

</Route>

</div>


)
}
