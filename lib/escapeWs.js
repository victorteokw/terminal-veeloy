const escapeWs = (s) => {
  return s.replace(/ /g, '\u00A0');
};

export default escapeWs;
