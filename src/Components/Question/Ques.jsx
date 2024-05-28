import  { useState, useEffect } from 'react';
import Logo from '../../asset/Logo.png';
import Line from '../../asset/Line.png';
import White_diamond from '../../asset/White_diamond.png';
import Outlined_diamond from '../../asset/Outlined_diamond.png';
import circle from '../../asset/circle.png';
import Right_arrow from '../../asset/Right_arrow.png';
import QuestionData from './Question.json';
import AnalyzingLoader from '../Loaders/Analyzing_loader';
import { Link } from 'react-router-dom';

const Ques = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0); // Track the selected option index
  const [selectedOptions, setSelectedOptions] = useState([]); // Store selected options
  const progressBarWidth = `${(currentQuestionIndex / (QuestionData.Ques.length - 1)) * 344}px`;
  const [textareaValue, setTextareaValue] = useState(''); // Add textarea state

  const isLastQuestion = currentQuestionIndex === QuestionData.Ques.length-1;

  // const handleNextClick = () => {
  //   if (currentQuestionIndex < QuestionData.Ques.length - 1 && selectedOptionIndex > -1) {
  //     // Save the selected option in the array
  //     const selectedOption = QuestionData.Ques[currentQuestionIndex].options[selectedOptionIndex];
  //     setSelectedOptions([...selectedOptions, selectedOption]);
                                                                                                
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setSelectedOptionIndex(-1); // Reset selected option for the next question
  //   }
  // };



  const handleNextClick = async () => {
    if (isLoading) {
      return; // If already loading, do nothing
    }

    if (currentQuestionIndex < QuestionData.Ques.length - 1 && selectedOptionIndex > -1) {
      const selectedOption = QuestionData.Ques[currentQuestionIndex].options[selectedOptionIndex];
      setSelectedOptions([...selectedOptions, selectedOption]);

      if (currentQuestionIndex === QuestionData.Ques.length - 1) {
        // If on the last question, start loading and delay for 3 seconds
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOptionIndex(-1);
        }, 3000);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(-1);
      }
    }
  };

  useEffect(() => {
    // Reset loading state when moving to the next question
    setIsLoading(false);
  }, [currentQuestionIndex]);

  const currentQuestion = QuestionData.Ques[currentQuestionIndex];

  return (
    <>
      <div className="relative w-[100%]">
        <img src={Logo} width={100} height={50} alt="stayFit logo" className="ml-[56px] mt-[17px]" />
        <div className="progress-bar w-[344px] h-[19px] bg-violet-100 rounded-3xl relative left-[568px] top-[-35px]">
          <div
            className="progress-bar_indicator w-[43px] h-[19px] bg-indigo-500 rounded-3xl absolute left-0"
            style={{ width: progressBarWidth }}
          >
            <p className="Question-Number text-neutral-500 text-[16px] font-medium font-['Montserrat'] absolute w-[23px] h-[17px] top-[18px] left-[11px] right-[9px]">
              {currentQuestionIndex + 1}/{QuestionData.Ques.length}
            </p>
          </div>
        </div>
        <div className="w-[528px] h-[530px] bg-gradient-to-b from-cyan-500 to-violet-500 rounded-xl absolute left-[492px] right-[492px]">
          <div className="flex absolute left-[110px] top-[36px]">
            <img src={Line} alt="line" className="rounded-lg" />
            <img src={White_diamond} alt="White_diamond" />
            <img src={Outlined_diamond} alt="outline_diamond" />
            <img src={circle} alt="circle" className="rounded-full w-[12px]" />
            <img src={circle} alt="circle" className="rounded-full w-[12px]" />
            <img src={circle} alt="circle" className="rounded-full w-[12px]" />
            <img src={Outlined_diamond} alt="outline_diamond" />
            <img src={White_diamond} alt="White_diamond" />
            <img src={Line} alt="line" className="rounded-lg" />
          </div>
          <div className="absolute w-[455px] h-[507px] top-[100px] left-[47px]">
            <div className="absolute top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#f8f8f8] text-[24px] text-center tracking-[0] leading-[normal]">
              Q.
            </div>
            <p className="absolute top-0 left-[43px] [font-family:'Montserrat',Helvetica] font-medium text-[#f8f8f8] text-[24px] tracking-[0] leading-[normal]">
              {currentQuestion.Ques}
            </p>
            <div className="absolute w-[355px] h-[30px] top-[56px]">
              <div className="space-y-4 mt-[56px] ml-[12px]">
                {currentQuestion.options.map((option, index) => (
                  <div className="flex items-center space-x-4" key={index}>
                    <input
                      type="radio"
                      id={`option${index + 1}`}
                      name="color"
                      value={`option${index + 1}`}
                      // Apply the gradient background to the selected option
                      className={`w-6 h-6 checked:bg-gradient-to-b from-cyan-500 to-violet-500 ${
                        index === selectedOptionIndex ? 'bg-gradient-to-b from-cyan-500 to-violet-500' : ''
                      }`}
                      onChange={() => setSelectedOptionIndex(index)} // Update the selected option index
                    />
                    <label
                      htmlFor={`option${index + 1}`}
                      className="text-stone-50 text-2xl font-medium font-['Montserrat']"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
 {/* Add the textarea here */}
 {currentQuestion.textareaRows && currentQuestion.textareaCols && (
            <input type="text"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              rows={currentQuestion.textareaRows}
              cols={currentQuestion.textareaCols}
              className="border border-solid border-[#B5B5B5] pl-[18px] rounded-[5px] w-[360px] h-[54px] mt-[290px] ml-[52px]"
              placeholder="Specify Here..."
            />
          )}

          </div>
          
          <div className="relative left-[423px]">
       <Link to="/Result">     <div className="absolute top-[480px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#f8f8f8] text-[24px] text-center tracking-[0] leading-[normal]">
              {isLastQuestion ? 'Finish' : 'Next'}
            </div></Link>
            <img
              className={`cursor-pointer absolute w-[6px] h-[12px] ml-2 top-[488px] left-[60px] ${
                selectedOptionIndex > -1 ? 'cursor-pointer' : 'cursor-not-allowed'
              }`}
              alt="Vector"
              src={Right_arrow}
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <AnalyzingLoader />
          
        </div>
      )}
    </>
  );
};

export default Ques;
