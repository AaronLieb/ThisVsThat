import styles from './Result.module.scss';

export default function Result({item}){
    return(
        <div className={styles.container} >
            <p className={styles.value}>{item.text}</p> 
            <p className={styles.value}>{`${item.matchupsWon}/${item.matchups}`}</p> 
            <p className={styles.value}>{Math.round(item.winPercent * 1000)/10}%</p> 
        </div>
    )
}