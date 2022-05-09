import styles from './Result.module.scss';

export default function Result({rank, item}){
    return (
      <div className={styles.row}>
        <span>#{rank}</span>
        <div>
          <p>{item.text}</p>
          {/* <p>{`${item.matchupsWon}/${item.matchups}`}</p> */}
          <p>{Math.round(item.winPercent * 1000) / 10}%</p>
        </div>
        <span></span>
      </div>
    );
}