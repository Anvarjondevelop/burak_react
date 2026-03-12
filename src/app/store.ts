import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";

export const store = configureStore({
  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    //@ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
  },
});
//redux logger store ni ichida qanday ma'lumot bor va  qanday o'zgaryapdi shuni console.log da aniq ko'rsatib beradi

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
