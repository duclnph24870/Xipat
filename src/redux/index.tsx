import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import REDUX_SLICE_NAMES from "consts/redux-slice-names";
import { userSlice } from "./store/userInfo";
import { toastMessageSlice } from "./store/ToastMessage";
import { loadingSlice } from "./store/loadingScreen";

const store = configureStore({
  reducer: {
    [REDUX_SLICE_NAMES.USER_INFO]: userSlice,
    [REDUX_SLICE_NAMES.LOADING_FULL_SCREEN]: loadingSlice,
    [REDUX_SLICE_NAMES.TOAST_NOTIFICATION]: toastMessageSlice,
  },
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;
