import { Controller, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name it nhat 3 ky tu"),
  lastName: yup.string().required("Last name is required"),
});

const Register = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      trieuchung: "",
    },
    resolver: yupResolver(schema),
  });



  const onSubmitFormCallback = (values) => {
    console.log("values", values);
  };

  console.log("errors", errors);

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={handleSubmit(onSubmitFormCallback)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="text" placeholder="First Name" />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
            );
          }}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="text" placeholder="Last Name" />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="text" placeholder="Email" />
                {errors["email"] && <p>{errors.email.message}</p>}
              </div>
            );
          }}
        />
           <Controller
          name="address"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="text" placeholder="Address" />
                {errors["adrees"] }
              </div>
            );
          }}
        />
          <Controller
          name="trieuchung"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="text" placeholder="trieuchung " />
                {errors["trieuchung"] }
              </div>
            );
          }}
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Register;

