import Key from "../Key/Key";

const KeyBoard = ({ keyGroup }) => {
  // const deleteKey = () => {};
  // const enterKey = () => {};

  return keyGroup.map(({ number, actionOnClick }) => {
    return (
      <Key
        testId={"total-words"}
        number={number}
        onActionClick={actionOnClick}
      ></Key>
    );
  });
};

export default KeyBoard;
