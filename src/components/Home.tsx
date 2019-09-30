import React, { FunctionComponent } from "react" // importing FunctionComponent
import MenuItem from "./menu/MenuItem"

type HomeProps = {
    title: string
    description: string
}

const Home: FunctionComponent<HomeProps> = ({
    title = "Simple Jobs App",
    description = "Start new scheduled or adhoc job and see it's progress",
}) => (
    <div>
        <div className='App-header '>
            <h2>{title}</h2>
            <div>
                <p>{description}</p>
            </div>
            <div className='menu-items'>
                <MenuItem name='Start new job' redirectionUrl='/jobs' />
                <MenuItem name='See defined jobs' redirectionUrl='/' />
                <MenuItem name='See pending jobs' redirectionUrl='/' />
            </div>
        </div>
    </div>
)
export default Home
