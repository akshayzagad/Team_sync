import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginEmployee } from "../state/auth/authAction";
import type { AppDispatch } from "../../../store";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
  };

  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  };
};
