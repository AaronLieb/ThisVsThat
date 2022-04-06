import VotingBox from "./VotingBox";
import classes from "./VotingLayout.module.css";

export default function VotingLayout() {
    return(
        <div>
            {/* HEADER GOES HERE */}
            <h1 className={classes.title}>Which is better?</h1>
            <div className={classes.voting_boxes}>
                <VotingBox color='red'/>
                <VotingBox color='blue'/>
            </div>
        </div>
        
    )

}