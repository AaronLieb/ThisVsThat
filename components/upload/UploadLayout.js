import classes from "./UploadLayout.module.css";
import UploadButton from "./UploadButton";

export default function UploadLayout() {

    return (
       <div>
           <h1 className={classes.title}>Upload your list to vote</h1>
           <div className={classes._boxes}>
                <UploadButton text='Upload.csv'/>
            </div>
       </div> 
    )
}