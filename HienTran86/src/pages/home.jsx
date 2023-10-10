import { Controller, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password it nhat 3 ky tu"),
  confirmpassword: yup.string().required("confirm is required"),

});

const Home = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmpassword: "",
      
      
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
          name="password"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="password" placeholder="Password" />
                {errors["password"] && <p>{errors.password.message}</p>}
              </div>
            );
          }}
        />
          <Controller
          name="confirmpassword"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="password" placeholder="ConfirmPassword" />
                {errors["password"] && <p>{errors.password.message}</p>}
              </div>
            );
          }}
        />
       
       
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Home;