import PropTypes from 'prop-types';

const Case = ({ children }) => {
  return children;
};

Case.propTypes = {
  value: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ])
};

export default Case;
