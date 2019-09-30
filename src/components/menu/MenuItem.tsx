import React, { FunctionComponent } from "react" // importing FunctionComponent
import { Link } from "react-router-dom"

const MenuItem: FunctionComponent<{ name: string; redirectionUrl: string }> = ({
    name,
    redirectionUrl,
}) => (
    <div className='menu-item'>
        <h5>
            <Link
                to={{
                    pathname: redirectionUrl,
                }}
            >
                {name}
            </Link>
        </h5>
    </div>
)
export default MenuItem
