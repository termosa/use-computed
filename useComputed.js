const React = require("react");

const useComputed = (fn, deps) => {
  const [dirty, setDirty] = React.useState(true);
  const [value, setLastValue] = React.useState();

  React.useEffect(() => setDirty(true), deps || []);

  return () => {
    if (dirty) {
      const newValue = dirty ? fn() : value;
      setDirty(false);
      setLastValue(newValue);
      return newValue;
    }
    return value;
  };
};

module.exports = useComputed;

