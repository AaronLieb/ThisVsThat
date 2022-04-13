import classes from "./ListRecievedLayout.module.css";
import VoteButton from "./VoteButton";

export default function UploadLayout() {

    return (
       <div>
           <h1 className={classes.title}>Success! We recieved your list.</h1>
           <div className={classes._boxes}>
                <VoteButton text='Vote Now'/>
            </div>
       </div> 
    )
}