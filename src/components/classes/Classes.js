import React from "react";
import style from './classes.module.css'

class Blue extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <ul>
                    <li className={style.blueText}>Name: {this.props.name}</li>
                    <li className={style.blueText}>Age: {this.props.age}</li>
                </ul>
            </>
        )
    }
}
export default Blue