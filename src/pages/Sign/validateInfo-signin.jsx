export default function validateInfos(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (values.status === "unvaild1123") {
    errors.email = "The Username or Password is Incorrect"

  }

  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
}