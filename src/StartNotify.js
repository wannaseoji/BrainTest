import styles from './StartNotify.module.css';
import backImage from './image/Vector 1.png'

const StartNotify = () => {
  	return (
    		<div className={styles.div}>
      			<div className={styles.div1}>
        				<p className={styles.p}>뇌 안에서 마주한 또 다른 ‘나’는</p>
        				<p className={styles.p}>현실 세계에서 살아가고 있는 ‘나’라는 존재를</p>
        				<p className={styles.p}>평화와 행복으로 이끌어 주는 역할을 합니다.</p>
        				<p className={styles.p}>&nbsp;</p>
        				<p className={styles.p}>다양한 상황을 해결하기 위한 방법을 선택하고</p>
        				<p className={styles.p}>선택에 따른 결과 값을 확인하고 보관해 보세요.</p>
        				<p className={styles.p}>&nbsp;</p>
        				<p className={styles.p5}>검사 시간은 5분 내외입니다.</p>
      			</div>
      			<div className={styles.child} />
      			<b className={styles.b}>시작하기</b>
      			<div className={styles.parent}>
        				<b className={styles.b1}>이전</b>
        				<img className={styles.groupChild} alt="" src={backImage} />
      			</div>
    		</div>);
};

export default StartNotify;
