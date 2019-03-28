import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import mapChildrenRecursively from './mapChildrenRecursively';

const ThemedContent = ({ children, colorTheme }) => {
  const lookupTable = {};
  Object.keys(colorTheme).forEach((key) => {
    if (key.startsWith('bg')) {
      lookupTable[key] = { backgroundColor: colorTheme[key] };
    } else {
      lookupTable[key] = { color: colorTheme[key] };
      if (key === 'gray') {
        lookupTable['blackBright'] = colorTheme[key];
      }
      if (key === 'blackBright') {
        lookupTable['gray'] = colorTheme[key];
      }
    }
  });
  return mapChildrenRecursively(children, (child) =>
    [cloneElement(child, { themeLookup: lookupTable }), true]
  );
};

ThemedContent.propTypes = {
  colorTheme: PropTypes.shape({
    black: PropTypes.string,
    red: PropTypes.string,
    green: PropTypes.string,
    yellow: PropTypes.string,
    blue: PropTypes.string,
    magenta: PropTypes.string,
    cyan: PropTypes.string,
    white: PropTypes.string,
    gray: PropTypes.string,
    blackBright: PropTypes.string,
    redBright: PropTypes.string,
    greenBright: PropTypes.string,
    yellowBright: PropTypes.string,
    blueBright: PropTypes.string,
    magentaBright: PropTypes.string,
    cyanBright: PropTypes.string,
    whiteBright: PropTypes.string,
    bgBlack: PropTypes.string,
    bgRed: PropTypes.string,
    bgGreen: PropTypes.string,
    bgYellow: PropTypes.string,
    bgBlue: PropTypes.string,
    bgMagenta: PropTypes.string,
    bgCyan: PropTypes.string,
    bgWhite: PropTypes.string,
    bgBlackBright: PropTypes.string,
    bgRedBright: PropTypes.string,
    bgGreenBright: PropTypes.string,
    bgYellowBright: PropTypes.string,
    bgBlueBright: PropTypes.string,
    bgMagentaBright: PropTypes.string,
    bgCyanBright: PropTypes.string,
    bgWhiteBright: PropTypes.string
  })
};

ThemedContent.defaultProps = {
  colorTheme: {}
};

export default ThemedContent;
