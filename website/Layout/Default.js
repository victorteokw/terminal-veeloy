import PropTypes from 'prop-types';

const Default = ({ children }) => {
  return children;
};

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Default;
