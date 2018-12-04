const callOnEnter = (callback) => (e) => {
  if(e.charCode === 13) {
    callback();
  }
};

export default callOnEnter