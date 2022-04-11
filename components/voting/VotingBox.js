import { createPortal } from 'react-dom';
import classes from './VotingBox.module.css';

export default function VotingBox(props){

    const color = props.color;

    return(
        <div className={color == 'red' ? classes.container_red : classes.container_blue}>
            <p className={classes.text}>
                {props.text}
            </p>
        </div>
    )
}
