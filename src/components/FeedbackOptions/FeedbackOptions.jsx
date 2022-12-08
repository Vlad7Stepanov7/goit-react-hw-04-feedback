import PropTypes from 'prop-types';
import Box from 'components/Box';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
    <Box>
        {options.map(option => (
            <button type='button' key={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
    </Box>
    );           
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    
}

export default FeedbackOptions;