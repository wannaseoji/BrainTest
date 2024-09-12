import styles from './Caution.module.css';


const Caution = () => {
    return (
        <div className={styles.container}>
          <div className={styles.header}>의학적 주의사항</div>
          <div className={styles.text}>
            이 검사는 다년간 쌓인 연구 결과와 임상 경험을 참고하여 만들어졌습니다.<br/> 검사 결과는
            일반적 특성을 나타내며, 의료 전문가의 평가나 치료를 대체할 수 없습니다.<br/> 자기보고식
            검사는 장점도 있지만 한계도 있습니다.
            <br />
            <br />
            이 검사는 여러분의 건강에 대한 의료 전문가의 의학적 판단을 대체하기 위해서가 아니라,<br/>
            여러분에게 정보를 제공하고 보다 나은 삶을 위해서 만들어졌습니다.<br/>
          </div>
          <div className={styles.text}>
          또한, 어떠한 의학적 상태의 진단, 치료, 치유를 위한 것도 아니며,<br/>
            본인의 감정을 잘 나타내는 뇌 유형을 시각적으로 구체화하기 위해 만들어졌습니다. <br/>
            특정한 의학적 상태와 치료방법에 대해서는 의료 전문가와 상의하시길 바랍니다.
          </div>
          <div className={styles.buttons}>
            <div  className={styles.agreeBtn}><b className={styles.b}>동의합니다</b></div>
            <div  className={styles.agreeBtn}><b className={styles.b}>동의하지 않습니다</b></div>
          </div>
        </div>
      );
};

export default Caution;
