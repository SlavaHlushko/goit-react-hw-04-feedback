import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonItem,
} from 'components/feedbackList/FeedbackList.styled';

export const FeedbackList = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <ButtonItem type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </ButtonItem>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
