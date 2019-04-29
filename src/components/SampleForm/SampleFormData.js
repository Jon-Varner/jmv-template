import uuid from 'uuid';
import * as yup from 'yup';

/*
  This data is used to dynamically generate form fields of each type.
*/

export const fields = [
  {
    name: 'name',
    id: uuid.v4(),
    type: 'text',
    label: 'Name:',
    required: 'true',
    placeholder: 'enter your name'
  },
  {
    name: 'email',
    id: uuid.v4(),
    type: 'email',
    label: 'Email:',
    required: 'false',
    placeholder: 'enter your email address'
  },
  {
    name: 'password',
    id: uuid.v4(),
    type: 'password',
    label: 'Password:',
    required: 'true',
    placeholder: 'enter a password'
  },
  {
    name: 'age',
    id: uuid.v4(),
    type: 'number',
    label: 'Age:',
    required: 'true',
    options: { min: 12, max: 120 }
  },
  {
    name: 'prefs',
    id: uuid.v4(),
    type: 'dropdown',
    label: 'Preference:',
    required: 'false',
    options: [
      { value: 1, displayValue: 'First' },
      { value: 2, displayValue: 'Second' },
      { value: 3, displayValue: 'Third' },
      { value: 4, displayValue: 'Fourth' }
    ]
  },
  {
    id: uuid.v4(),
    type: 'checkbox',
    label: 'Pronouns:',
    required: 'false',
    options: [
      { id: uuid.v4(), name: 'he', displayValue: 'he/him', checked: false },
      { id: uuid.v4(), name: 'she', displayValue: 'she/her', checked: false },
      { id: uuid.v4(), name: 'they', displayValue: 'they/them', checked: false }
    ]
  },
  {
    name: 'optin',
    id: uuid.v4(),
    type: 'radio',
    label: 'Subscribe:',
    required: 'false',
    options: [
      { id: uuid.v4(), value: true, displayValue: 'yes', checked: false },
      { id: uuid.v4(), value: false, displayValue: 'no', checked: false }
    ]
  }
];

/*
  This data is used to validate the dynamically generated form.
*/

export const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter your name.'),
  email: yup.string().email('Please enter a valid email address.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .required('Please enter a password.'),
  age: yup
    .number()
    .required('Please enter your age.')
    .positive('Please enter a valid age.')
    .integer('Please enter a valid age.')
    .min(12, 'Age must be at least 12.')
    .max(120, 'Age must be lower than 120.')
});
