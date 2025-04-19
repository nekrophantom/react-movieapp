const Button = ({ children, className = '', type = 'button', onClick }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button