const actionCreator = (type) => {
  if (!type) {
    throw new Error('Provide existing action type for action creator factory');
  }

  return (payload) => ({
    type,
    payload,
  });
};

export default actionCreator;
