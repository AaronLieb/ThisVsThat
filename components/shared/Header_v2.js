import classes from './Header_v2.module.css';



export default function Header_v2(){
    return(
        <div className={classes.container}>
            <img className={classes.logo} src="/logo.png" alt="logo"/>
            <h1 className={classes.Title}>This vs. That</h1>
        </div>
    )
}