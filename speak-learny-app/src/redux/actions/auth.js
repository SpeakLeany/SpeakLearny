import axios from "axios";
import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import { setAlert } from "./alert";
import { toast } from "react-toastify";

export const login = (email, password) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/token/",
        body,
        config,
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      toast.danger(err.response.data.message);
      dispatch({
        type: LOGIN_FAIL,
      });
      if (
        err.response.data.email ||
        err.response.data.password ||
        err.response.data.detail
      ) {
        dispatch(setAlert("Email or password are incorrect", "error"));
      } else {
        dispatch(setAlert("Error Authenticating", "error"));
      }
    }
  };

export const signup = ({
  first_name,
  last_name,
  email,
  password,
  password2,
  description,
  birthday,
  image,
  country,
  city,
  phone,
}) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(image);

    const form = new FormData();
    form.append("first_name", first_name);
    form.append("last_name", last_name);
    form.append("email", email);
    form.append("password", password);
    form.append("password2", password2);
    form.append("description", description);
    form.append("birthday", birthday);
    form.append("country", country);
    form.append("city", city);
    form.append("phone", phone);
    form.append("image", image);

    console.log(form);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/accounts/signup",
        form,
        config,
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });

      dispatch(login(email, password));
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert(err.response.data, "error"));
    }
  };

export const logout = () =>
  (dispatch) => {
    dispatch({ type: LOGOUT });
  };
