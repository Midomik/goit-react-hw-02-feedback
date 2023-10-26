import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getFeedbeck = feedback => {
    this.setState({
      [feedback]: this.state[feedback] + 1,
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };
  render() {
    return (
      <div className={css.main_container}>
        <Section title={'Option'}>
          <FeedbackOptions
            getFeedbeck={this.getFeedbeck}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistic'}>
          <Statistics
            data={this.state}
            total={this.countTotalFeedback()}
            goodPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

//http://localhost:3000/react-homework-template
