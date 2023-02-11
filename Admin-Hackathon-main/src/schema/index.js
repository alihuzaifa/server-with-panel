import * as Yup from "yup";
// Login Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(3, "Name should be at least 3 characters"),
  lastName: Yup.string()
    .required("Required")
    .min(3, "Name should be at least 3 characters"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Required"),
  image: Yup.mixed().required("File is required"),
});

export { LoginSchema, SignupSchema };
