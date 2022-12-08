import { useState } from "react";
import Box from "./Box";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = ( good, neutral, bad ) => {
    const total = good + neutral + bad;

    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / countTotalFeedback(good, neutral, bad)) * 100;
   
    return isNaN(positivePercentage) ? '0' : Math.round(positivePercentage);
  }



  const handleClickOption = e => {
    const optionFeedback = e.target.textContent;
     switch (optionFeedback) {
      case "good":
         setGood(prevGood => prevGood + 1);
         break;
       
      case "neutral":
         setNeutral(prevNeutral => prevNeutral + 1);
         break;
       
      case "bad":
         setBad(prevBad => prevBad + 1);
         break;
       
      default:
        break;
     }
  }

    return (
      <Box
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        fontSize='40'
        color='#010101'
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClickOption} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback(good, neutral, bad) !== 0 ?
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback(good, neutral, bad)} positivePercentage={countPositiveFeedbackPercentage()} /> :
          <Notification message="There is no feedback" />}
          
          
        </Section>
      </Box>
    )
  };
