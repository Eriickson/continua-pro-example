import { getClient } from "@/settings";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseApi } from "src/types";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";
import { Profile } from "@continuapro/entity";

const client = getClient();

const cookies = new Cookies();
interface Error {
  hasError: boolean;
  shortDescription: {
    title: string;
    description: string;
  };
}

interface InitialStateEntityFetch<T> {
  isLoading: boolean;
  data: T | null;
  err: Error;
}

interface LoginInitialState {
  signin: InitialStateEntityFetch<AuthenticateResponse>;
  signup: InitialStateEntityFetch<AuthenticateResponse>;
}
interface AuthenticateResponse {
  auth_token: string;
  user_type: string;
  user_id: string;
  user: Profile;
}

const initialState: LoginInitialState = {
  signin: {
    data: null,
    err: {
      hasError: false,
      shortDescription: {
        description: "",
        title: "",
      },
    },
    isLoading: false,
  },
  signup: {
    isLoading: false,
    data: null,
    err: {
      hasError: false,
      shortDescription: {
        description: "",
        title: "",
      },
    },
  },
};

interface signinArgs {
  email: string;
  password: string;
  returnUrl?: string;
}

interface signunArgs {
  name: string;
  email: string;
  phone: string;
  company_name: string;
}

export const signin = createAsyncThunk("login/signin", async ({ email, password }: signinArgs) => {
  try {
    const { data } = await client.post<ResponseApi<AuthenticateResponse[]>>("/authenticate", { email, password });
    return {
      data: data.data[0],
      successful: true,
    };
  } catch (err: any) {
    return Promise.reject(err.response.data.message);
  }
});

export const signup = createAsyncThunk("login/signup", async ({ company_name, email, name, phone }: signunArgs) => {
  console.log(company_name, email, name, phone);

  try {
    const { data } = await client.post<ResponseApi<AuthenticateResponse[]>>("/signup", {
      registration: { company_name, email, name, phone },
    });
    return {
      data: data.data[0],
      successful: true,
    };
  } catch (err: any) {
    return Promise.reject(err.response.data.message);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [signin.pending.type]: (state) => {
      state.signin.isLoading = true;
    },
    [signin.fulfilled.type]: (_, { payload, meta }: any) => {
      const { exp } = jwt.decode(payload.data.auth_token) as { exp: number };

      cookies.set("auth_token", payload.data.auth_token, {
        path: "/",
        expires: new Date(exp * 1000),
      });

      localStorage.setItem("current_user", JSON.stringify(payload.data.user));

      const redirect = meta.arg?.returnUrl || "/dashboard";
      window.location.href = redirect;
    },
    [signin.rejected.type]: (state, payload) => {
      state.signin.err = {
        hasError: true,
        shortDescription: {
          title: "Ha ocurrido un error",
          description: payload.error.message,
        },
      };
      state.signin.isLoading = false;
    },
    [signup.pending.type]: (state) => {
      state.signup.isLoading = true;
    },
    [signup.rejected.type]: (state, payload) => {
      state.signin.err = {
        hasError: true,
        shortDescription: {
          title: "Ha ocurrido un error",
          description: payload.error.message,
        },
      };
      state.signin.isLoading = false;
    },
    [signup.fulfilled.type]: (state) => {
      state.signup.isLoading = false;
    },
  },
});

const { reducer } = loginSlice;

export default loginSlice.reducer;
