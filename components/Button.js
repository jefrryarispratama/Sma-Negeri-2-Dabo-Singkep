const Button = ({children, className}) => {
  return <button className={`border border-blue-600 px-6 py-3 ${className}`}>{children}</button>;
};

export default Button;
