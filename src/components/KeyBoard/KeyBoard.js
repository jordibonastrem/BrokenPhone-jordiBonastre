import Key from "../Key/Key";

const KeyBoard = ({ keyGroup }) => {
  // const deleteKey = () => {};
  // const enterKey = () => {};

  return (
    <ol className="keyboard">
      {keyGroup.map((key) => {
        return (
          <Key
            testid={"test-number"}
            number={key.number}
            key={key.id}
            className={key.number === "Delete" ? "key big" : "key"}
            actionOnClick={() => {
              console.log(key.number);
            }}
          ></Key>
        );
      })}
    </ol>
  );
};

export default KeyBoard;
