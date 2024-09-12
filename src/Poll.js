import React, { useState } from 'react';
import styles from './Poll.module.css'; // CSS 파일 불러오기
import backImage from './image/Vector 1.png';
import middleImage from './image/대지 9 사본 2k.png';

 const questions = [
	{
	  question: '나는 정리정돈을 훌륭하게 해낸다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '나는 새로운 정보를 쉽게 받아들인다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '나는 집중력을 쉽게 잃는다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '나의 주의 지속시간은 짧다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '줄을 서서 차례를 기다리는 건 쉽다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '어떤 것에 대해 생각하던 도중 다른 생각으로 빠지고는 한다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '미래를 위해 당장의 즐거움을 참기가 힘들다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '무언가를 기억해내는 것이 힘들다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '10년 전보다 기억력이 나빠졌다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '이름을 기억하는 것이 어렵다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	// 귀하의 생활
	{
	  question: '일주일에 두 번 이상 운동을 한다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '하루에 7-8시간 이상 수면을 취한다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '영양가 없고 무계획적인 식사를 하는 경향이 있다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '하루에 두 컵(240ml) 이상의 커피를 마신다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '매일 설탕이 든 탄산음료를 마신다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '일주일에 4잔 이상의 술을 마신다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '담배를 피우거나 간접흡연에 노출된다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '하루에 한 시간 이상 TV를 본다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '수면을 개시하고 유지하는데 어려움을 겪는다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '직장 또는 집에서 스트레스를 받는다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '가까운 사람들과의 관계가 건강하고 만족스럽다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '새로운 것을 배우는 활동이나 뇌를 훈련하는 게임을 한다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	// 요즘 기분
	{
	  question: '괜찮은 부분보다 잘못된 부분에 더 집중하는 경향이 있다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '논쟁하거나 반대 의견을 내는 경향이 있다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '머릿속에서 생각이 빙빙 돌고 막히는 경향이 있다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '슬프거나 우울한 기분 때문에 어려움을 겪는다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '걱정 때문에 어려움을 겪는다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '과거의 상처에서 벗어나기 힘들다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '생각이 부정적이다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '자존감이 정말 좋다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '기쁨을 느끼기 어렵다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '잘못된 방식으로 일을 받아들이는 경향이 있다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '긴장을 풀기가 어렵다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '최악의 상황을 가정하는 경향이 있다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '비판에 민감하다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '손톱을 물어뜯거나 피부 껍질을 벗겨낸다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '긴장되고 초조하다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '거의 매일 에너지가 넘친다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
	{
	  question: '욕구를 참기가 어렵다.',
	  options: [
		'전혀 아니다',
		'간혹 그렇다',
		'가끔 그렇다',
		'자주 그렇다',
		'대부분 그렇다',
	  ],
	},
  ];

const Poll = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(0)); // 각 질문에 대한 답변 점수를 저장
  const [animation, setAnimation] = useState('fadeIn'); // 기본 애니메이션

  const handleOptionClick = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex; // 각 옵션에 대해 선택된 값을 저장 (0부터 시작)
    setAnswers(newAnswers);

    setAnimation('fadeOut'); // fade-out 애니메이션 시작
    setTimeout(() => {
      const newIndex = currentQuestion < questions.length - 1 ? currentQuestion + 1 : 0;
      setCurrentQuestion(newIndex);
      setAnimation('fadeIn'); // 새로운 질문에 대해 fade-in 애니메이션 시작
    }, 1000);
  };

  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setAnimation('fadeOut');
      setTimeout(() => {
        const newIndex = currentQuestion - 1;
        setCurrentQuestion(newIndex);
        setAnimation('fadeIn');
      }, 1000);
    }
  };

  const handleSubmit = () => {
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0); // 점수 합산
    const brainType = getBrainType(totalScore); // 뇌 유형 계산
    alert(`당신의 뇌 유형은 ${brainType}입니다: ${brainTypeDescriptions[brainType]}`);
  };

  const progressPercent = Math.floor(((currentQuestion + 1) / questions.length) * 100);

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <b className={styles.b}>{progressPercent}%</b>
      <div className={styles.item} style={{ width: `${progressPercent}%` }} /> {/* 진행률에 따라 너비 조정 */}
      <img className={styles.kIcon} alt="" src={middleImage} />

      <div className={`${styles.questionContainer} ${styles[animation]}`}>
        <b className={styles.b1}>{questions[currentQuestion].question}</b>
      </div>

      {questions[currentQuestion].options.map((option, index) => (
        <b
          key={index}
          className={styles[`b${index + 2}`]}
          onClick={() => handleOptionClick(index + 1)} // 각 옵션에 점수를 부여 (1부터 5까지)
        >
          {option}
        </b>
      ))}

      <div className={styles.inner3} onClick={() => handleOptionClick(1)} />
      <div className={styles.ellipseDiv} onClick={() => handleOptionClick(2)} />
      <div className={styles.child1} onClick={() => handleOptionClick(3)} />
      <div className={styles.child2} onClick={() => handleOptionClick(4)} />
      <div className={styles.child3} onClick={() => handleOptionClick(5)} />

      {currentQuestion === questions.length - 1 && (
        <button onClick={handleSubmit} className={styles.submitButton}>
          결과 확인
        </button>
      )}

      <div className={styles.parent}>
        <b className={styles.b7} onClick={handlePrevClick}>이전</b>
        <img className={styles.groupChild} alt="" src={backImage} />
      </div>
    </div>
  );
};

// 뇌 유형을 결정하는 함수
const getBrainType = (totalScore) => {
  if (totalScore <= 9) return 1;
  if (totalScore <= 19) return 2;
  if (totalScore <= 29) return 3;
  if (totalScore <= 39) return 4;
  if (totalScore <= 49) return 5;
  if (totalScore <= 59) return 6;
  if (totalScore <= 69) return 7;
  if (totalScore <= 79) return 8;
  if (totalScore <= 89) return 9;
  if (totalScore <= 99) return 10;
  if (totalScore <= 109) return 11;
  if (totalScore <= 119) return 12;
  if (totalScore <= 129) return 13;
  if (totalScore <= 139) return 14;
  if (totalScore <= 149) return 15;
  return 16;
};

// 뇌 유형 설명
const brainTypeDescriptions = {
  1: "차분하고 안정적인 성향",
  2: "신중하면서도 집중력이 좋은 성향",
  3: "긍정적이며 자신감이 있는 성향",
  4: "창의적이고 유연한 성향",
  5: "준비성이 철저하고 동기부여가 잘 되는 성향",
  6: "조직적이고 계획적인 성향",
  7: "논리적이며 분석적인 성향",
  8: "사회적이고 외향적인 성향",
  9: "감정 기복이 적고 문제 해결 능력이 좋은 성향",
  10: "직관적이며 감각적인 성향",
  11: "목표 지향적이고 성취욕이 강한 성향",
  12: "호기심 많고 학습 의욕이 강한 성향",
  13: "민감하고 섬세한 성향",
  14: "독립적이고 자주적인 성향",
  15: "혁신적이며 실험적인 성향",
  16: "정신적 피로가 높고 스트레스가 많은 성향"
};

export default Poll;
