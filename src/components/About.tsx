import React, { FunctionComponent } from "react" // importing FunctionComponent

type AboutProps = {
    title: string
    description: string
}

const About: FunctionComponent<AboutProps> = ({
    title = "egewg",
    description = "Tetwtwe",
}) => (
    <aside>
        <h2>{title}</h2>
        <p>{description}</p>
    </aside>
)
export default About
