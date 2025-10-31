import React, { type FC } from 'react'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classes?: string
  tooltip?: string
  label?: string
  name?: string
  placeholder?: string
  fieldClasses?: string
}

// если не расширяемся от React.Input....
// FC<TextFieldProps & React.InputHTMLAttributes<HTMLInputElement>>

export const TextField: FC<TextFieldProps> = ({
  classes,
  tooltip,
  label,
  name,
  placeholder,
  fieldClasses,
  ...rest
}) => {
  return (
    <div className={`text-field-wrapper ${classes}`}>
      <label
        htmlFor={name}
        className='label-text'
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className={`text-field ${fieldClasses}`}
        {...rest}
      />

      {tooltip && <p className='helper-text'>{tooltip}</p>}
    </div>
  )
}
