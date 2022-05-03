import styles from './Result.module.scss';

export default function Result(props){
    return(
        <div className={styles.container} >
            <p className={styles.p}>
                {props.text}
            </p>
        </div>
    )
}