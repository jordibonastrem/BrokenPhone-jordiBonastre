import Action from "../Action/Action";
const Actions = () => {
  return (
    <div className="actions">
      <Action text={"hang"} className={"actions a hang"}></Action>
      <Action text={"call"} className={"actions a call"}></Action>
    </div>
  );
};

export default Action;
