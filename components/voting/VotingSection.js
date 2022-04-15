// import Header_v2 from "../shared/Header";
// import VotingBox from "./VotingBox";
import classes from "./VotingSection.module.css";

export default function VotingSection(props) {
    return(
        <div className={classes.container}>
            <h1 className={classes.title}>Which is better?</h1>
            <div className={classes.voting_boxes}>
                <div className={classes.blue_box}>
                    <p className={classes.text}>{props.thing_one}</p>
                </div>
                <div className={classes.red_box}>
                    <p className={classes.text}>{props.thing_two}</p>
                </div>
            </div>
        </div>
        
    )

}