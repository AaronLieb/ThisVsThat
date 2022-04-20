import classes from "./ViewButton.module.css";

export default function ViewButton(props){

    return(
        <div className={classes.container_blue}>
        <p className={classes.text}>
            {props.text}
        </p>
    </div>
    )
}