import styles from './MainFrame.module.css';
import backImage from './image/Vector 1.png'

const MainFrame = () => {
	return (
		<div className={styles.div}>
		<div className={styles.child} />
		<b className={styles.b}>당신의 이름은 무엇인가요?</b>
		<div className={styles.item} />
		<div className={styles.inner} />
		<b className={styles.b1}>다음</b>
		<b className={styles.b2}>2%</b>
		<div className={styles.rectangleDiv} />
		<div className={styles.parent}>
		<b className={styles.b3}>이전</b>
		<img className={styles.groupChild} alt="" src={backImage} />
		</div>
		</div>);
		};
      			
export default MainFrame;
      			