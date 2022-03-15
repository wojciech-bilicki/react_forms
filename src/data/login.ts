const loginFormData = {
  formInput: [
    {
      type: 'text',
      label: 'Enter your username',
      required: true,
      rule: '^(?:(0[0-9]{9,10}|[1-9][0-9]{8})|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+)$',
      key: 'username',
    },
    {
      type: 'password',
      label: 'Password',
      required: true,
      rule: '^.{6,30}$',
      key: 'password',
    },
  ],
  links: [
    {
      action: 'function',
      href: 'recover',
      position: 'form',
      align: 'right',
      label: 'Forgot your password?',
    },
    {
      action: 'function',
      href: 'register',
      position: 'footer',
      align: 'left',
      label: 'Create an account',
      descriptionLabel: 'New user?',
    },
  ],
  result: 'proceed',
  renderType: 'simple',
  step: 'credentials',
  label: 'Log in',
  proceedLabel: 'Try to log in',
  descriptionLabel: 'Enter your credentials',
};

export default loginFormData;
