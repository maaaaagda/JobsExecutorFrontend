import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import About from "./components/About"

const App: React.FC = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <div className='container'>
                    <Route exact path='/' component={About} />
                    <Route path='/about' component={About} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
