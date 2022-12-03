import PropTypes from 'prop-types';

export const FeedbackList = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
