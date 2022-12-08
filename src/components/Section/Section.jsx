import PropTypes from 'prop-types';
import Box from 'components/Box';

const Section = ({title, children}) => {
    return (
        <Box as='section'>
            <h2>{title}</h2>
             {children}
        </Box>
)}

Section.propType = {
    title: PropTypes.string.isRequired
}

export default Section;