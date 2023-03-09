import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => ( 
    <div>
      {options.map(option => (
        <Button
          type="button"
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </Button>
      ))}
    </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};