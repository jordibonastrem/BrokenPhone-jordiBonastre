const Key = ({ number, actionOnClick, testId, className }) => {
  return (
    <button className={className} data-testid={testId} onClick={actionOnClick}>
      {number}
    </button>
  );
};
export default Key;
