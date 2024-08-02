import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { api } from "./services/api"
import user from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
