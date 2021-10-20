import Key from "../Key/Key";

const KeyBoard = ({ keyGroup }) => {
  const deleteKey = () => {};
  const enterKey = () => {};

  keyGroup.map((key) => {
    return <Key number={key.number} key={key} actionOnClick={() => {}}></Key>;
  });
};
