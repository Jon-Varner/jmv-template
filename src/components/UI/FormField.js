import React from 'react';

const FormField = ({ id, type, ...props }) => {
  let field = null;

  switch (props.type) {
    case 'text':
      field = <input id={id} placeholder={props.placeholder} {...props} />;
      break;
    case 'textarea':
      field = <textarea id={id} placeholder={props.placeholder} {...props} />;
      break;
    case 'dropdown':
      field = <select id={id} {...props} />;
      break;
    default:
      field = <input id={id} placeholder={props.placeholder} {...props} />;
  }

  return (
    <div className="form-field">
      <label for={id}>{props.label}</label>
      {field}
    </div>
  );
};

export default FormField;
