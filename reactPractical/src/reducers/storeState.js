import {RED_TYPE} from '@constants';

import {localize} from '@languages';

let initialState = {
  resServer: '',
  isLoading: false,
  resError: '',
  isOnline: false,
  userData: {},
  alertData: {
    isShowAlert: false,
    alertTitle: localize('ERR_ALERT_TITLE'),
    alertMsg: localize('ERR_ALERT_MSG'),
    successBtnTitle: localize('OK'),
    cancelBtnTitle: localize('CANCEL'),
  },
  toastData: {
    isShowToast: false,
    toastTitle: localize('ERR_ALERT_TITLE'),
    toastMsg: localize('ERR_ALERT_MSG'),
  },
  searchData: {keyword: '', isForceSearch: false},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RED_TYPE.API_LOADING:
      return {...state, isLoading: action.isLoading};
    case RED_TYPE.API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resServer: action.resServer,
      };
    case RED_TYPE.API_ERROR:
      return {
        ...state,
        isLoading: false,
        resError: action.resError,
      };
    case RED_TYPE.NETWORK_STATUS:
      return {
        ...state,
        isOnline: action.isOnline,
      };

    case RED_TYPE.ALERT_DATA:
      return {
        ...state,
        alertData: action.alertData,
      };
    case RED_TYPE.TOAST_DATA:
      return {
        ...state,
        toastData: action.toastData,
      };
    //user's data
    case RED_TYPE.USER_DATA:
      return {
        ...state,
        userData: {...state.userData, ...action},
      };

    default:
      return state;
  }
}
