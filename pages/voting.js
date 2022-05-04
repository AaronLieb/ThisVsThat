import VotingSection from "../components/voting/VotingSection";
import Header from "../components/shared/Header";
import styles from "../styles/voting.module.css";

export default function Voting(props){

    const things = ["HOOP", "POOH"]

    return (
        <div className={styles.page}>
            <Header/>
            <VotingSection thing_one={things[0]} thing_two={things[1]}/>
        </div>
    )
}