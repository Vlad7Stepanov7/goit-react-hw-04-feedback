import React, { Component } from "react";
import Box from "./Box";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback({ good, neutral, bad }) {
    const total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage() {
    const positivePercentage = (this.state.good / this.countTotalFeedback(this.state)) * 100;
   
    return isNaN(positivePercentage) ? '0' : Math.round(positivePercentage);
  }



  handleClickOption = e => {
    const optionFeedback = e.target.textContent;

    this.setState(prevState => {
          return { [optionFeedback]: prevState[optionFeedback] + 1 };
        });
  }

  render() {
    const { good, neutral, bad } = this.state;


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
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleClickOption} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) !== 0 ?
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback(this.state)} positivePercentage={this.countPositiveFeedbackPercentage()} /> :
          <Notification message="There is no feedback" />}
          
          
        </Section>
      </Box>
    )
  }
};
