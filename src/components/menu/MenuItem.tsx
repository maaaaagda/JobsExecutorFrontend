import React, { FunctionComponent } from "react" // importing FunctionComponent

const MenuItem: FunctionComponent<{ name: string }> = ({ name }) => (
    <div className='menu-item'>
        <h5>{name}</h5>
    </div>
)
export default MenuItem
