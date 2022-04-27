import classes from "./VoteButton.module.css";

export default function UploadButton(props){

    return(
        <div className={classes.container_blue}>
        <p className={classes.text}>
            {props.text}
        </p>
    </div>
    )
}