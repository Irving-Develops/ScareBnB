import React from 'react'

const FormInput = ({ type, placeholder, value, onChange}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} required/>
  )
}

export default FormInput