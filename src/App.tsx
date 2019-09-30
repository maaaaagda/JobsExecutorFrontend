import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import JobsList from "./components/JobsList"

const App: React.FC = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <div className='container'>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/jobs' component={JobsList} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
