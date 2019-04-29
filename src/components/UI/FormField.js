import React from 'react';

const FormField = ({
  name,
  id,
  type,
  label,
  required,
  errorMessage,
  className,
  value,
  placeholder,
  options,
  ...props
}) => {
  let field = null;
  let requiredMarker = null;

  if (required === 'true') {
    requiredMarker = <span className="required">*</span>;
  }

  switch (type) {
    case 'text':
    case 'password':
    case 'email':
      field = (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          className={className}
          {...props}
        />
      );
      break;

    case 'number':
      field = (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          min={options.min}
          max={options.max}
          placeholder={placeholder}
          className={className}
          {...props}
        />
      );
      break;

    case 'textarea':
      field = (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          className={className}
          {...props}
        />
      );
      break;

    case 'dropdown':
      field = (
        <select
          id={id}
          name={name}
          value={value}
          className={className}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    case 'checkbox':
      field = (
        <ul>
          {options.map(option => (
            <li key={option.id}>
              <input
                type="checkbox"
                name={option.name}
                id={option.id}
                value={value}
                className={className}
                {...props}
              />
              <label htmlFor={option.id}>{option.displayValue}</label>
            </li>
          ))}
        </ul>
      );
      break;
    case 'radio':
      field = (
        <ul>
          {options.map(option => (
            <li key={option.id}>
              <input
                type="radio"
                name={name}
                id={option.id}
                value={option.value}
                className={className}
                {...props}
              />
              <label htmlFor={option.id}>{option.displayValue}</label>
            </li>
          ))}
        </ul>
      );
      break;
    default:
      field = (
        <input
          id={id}
          name={name}
          value={value}
          placeholder={props.placeholder}
          className={className}
          {...props}
        />
      );
  }

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {requiredMarker}
      </label>
      {field}
      <span className="form-field-error">{errorMessage}</span>
    </div>
  );
};

export default FormField;
