import React from 'react'

const Input = ({ label, type = 'text', placeholder, value, onChange, name, children }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-left">{label}</legend>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {children}
    </fieldset>
  )
}

export default Input