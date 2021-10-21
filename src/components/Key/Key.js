const Key = ({ number, onActionClick, testId }) => {
  return (
    <button data-testid={testId} onClick={onActionClick}>
      {number}
    </button>
  );
};
export default Key;
