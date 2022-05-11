import "./Button.css";

const Button = ({ children, onClick, color = "blue", className = "" }) => {
  const classNames = `Button ${color} ${className}`;
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
