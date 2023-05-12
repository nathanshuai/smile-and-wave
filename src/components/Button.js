

function Button(props) {
  const buttonClass = props.type === 'primary' ? 'primary-button' : 'secondary-button';

  return (
    <button className={buttonClass}>{props.text}</button>
  )
}

export default Button;
