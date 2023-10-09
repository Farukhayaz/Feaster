import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const QuestionWrapper = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionText = styled.span`
  font-weight: bold;
`;

const Answer = styled.div`
  padding: 10px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FAQContainer>
      {data.map((item, index) => (
        <div key={item.id}>
          <QuestionWrapper  className='bg-[#ff6d34]' onClick={() => toggleAnswer(index)}>
            <QuestionText>{item.question}</QuestionText>
            <span className='text-[22px] font-bold'>{activeIndex === index ? '--' : '++'}</span>
          </QuestionWrapper>
          <Answer show={activeIndex === index}>{item.answer}</Answer>
        </div>
      ))}
    </FAQContainer>
  );
};

const questions = [
  {
    id: 1,
    question: '"MYSTERY TITLE" / 03.04.22 / TUES / 12:00:00 / 10 SPORTS | ',
    answer: '"MYSTERY TITLE" / 03.04.22 / TUES / 12:00:00 / 10 SPORTS |',
  },
  {
    id: 2,
    question: '"MYSTERY TITLE" / 03.04.22 / TUES / 12:00:00 / 10 SPORTS |',
    answer: '"MYSTERY TITLE" / 03.04.22 / TUES / 12:00:00 / 10 SPORTS |',
  },
  {
    id: 3,
    question: '"MYSTERY TITLE" / 03.04.22 / TUES / 12:00:00 / 10 SPORTS |',
    answer: '"MYSTERY TITLE" / 03.04.22 / TUES / 12:00:00 / 10 SPORTS |',
  },
];

function Faq() {
  return (
    <div className='bg-gray-800  text-white'>
<div className='container pt-[50px] mx-auto'>
    <div className='flex flex-wrap w-[75%] mb-10 mx-auto justify-between items-center'><img src='/images/log.png'/>
    <h1>Get Exclusive Access!</h1>
    </div>
<FAQ  data={questions} />
<div className='flex pb-[5%] justify-center mt-6'>
    <input placeholder='Email' style={{background:"transparent" , border:"1px solid #ff6d34"}}/>
    <button className='ml-5  bg-[#ff6d34] px-3 '>SUBSCRIBE</button>
</div>
</div>
    </div>
  );
}

export default Faq;
