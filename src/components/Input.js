const Input = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <br />
    <input id={props.id} onChange={props.changed} value={props.value} />
  </div>
);

export default Input;
