import classes from "./FinishedLayout.module.css";
import ViewButton from "./ViewButton";

export default function FinishedLayout() {

    return (
       <div>
           <h1 className={classes.title}>You've reached the end!</h1>
           <div className={classes._boxes}>
                <ViewButton text='View Rankings'/>
            </div>
       </div> 
    )
}