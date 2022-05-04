import ResultsLayout from "../components/results/ResultsLayout";
import Header from "../components/shared/Header";
import styles from "../styles/results.module.scss";
import Result from "../components/results/Result";
import Button from "../components/shared/Button";


export default function Results() {

    let items=['item 1', 'item 2', 'item 3'];
    let itemList=[];
    items.forEach((item,index)=>{
        itemList.push(<Result text={item}/>)
    })

    return(
        <div>
            <Header/>
            <h1 className={styles.h1}>Your rankings:</h1>
            <div className={styles.rankings_container}>
                {itemList}
            </div>
            <div className={styles.footer}>
            <Button className={styles.ranking_button} color="blue">Create a new ranking</Button>
            </div>
        </div>
    )
}