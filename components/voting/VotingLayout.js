import Header_v2 from "../shared/Header_v2";
import VotingBox from "./VotingBox";
import classes from "./VotingLayout.module.css";

export default function VotingLayout() {
    return(
        <div>
            <Header_v2/>
            <h1 className={classes.title}>Which is better?</h1>
            <div className={classes.voting_boxes}>
                <VotingBox color='red' text='hi'/>
                <VotingBox color='blue' text='hello'/>
            </div>
        </div>
        
    )

}