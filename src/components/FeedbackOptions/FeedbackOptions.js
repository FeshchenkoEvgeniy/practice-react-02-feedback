import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => ( 
    <div>
      {options.map(option => (
        <button
          type="button"
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};