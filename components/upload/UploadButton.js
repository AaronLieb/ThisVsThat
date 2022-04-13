import classes from "./UploadButton.module.css";

export default function UploadButton(props){

    return(
        <div className={classes.container_blue}>
        <p className={classes.text}>
            <img className={classes.uploadlogo} src='/downloadpicture.png' alt="downloadpicture"/>
            {props.text}
        </p>
    </div>
    )
}