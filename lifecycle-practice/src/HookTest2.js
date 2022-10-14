import styles from "./HookTest.module.css";
import img from "./5.png";


const HookTest = () =>{
    
    return(
    <>  
        {/* <div className={`${styles.test} ${styles.txt}`}>하위</div> */}

        <div className={`${styles.test} ${styles.one}`}></div>
        <div className={`${styles.test} ${styles.two}`}></div>
        <div className={`${styles.test} ${styles.three}`}></div>
        <div className={`${styles.test} ${styles.four}`}></div>
        <div className={`${styles.test} ${styles.five}`}></div>
        <div className={`${styles.test} ${styles.eyes}`}></div>
        <div className={`${styles.test} ${styles.eye}`}></div>
        <img src={img}></img>
    </>
    );
}
export default HookTest;