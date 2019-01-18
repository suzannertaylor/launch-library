import React from "react";

const Wiki = props => {
    return (
        <a href={ props.path } key={props.name}  className={ props.aClassName }>
            { props.name }
         </a>
    );
}

export default Wiki;