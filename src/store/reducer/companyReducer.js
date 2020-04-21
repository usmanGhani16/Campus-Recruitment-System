import * as actionType from '../action/actionType';

const initialState = {
  companyData: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.COMPANY_DATA:
      return {
        ...state,
        companyData: [...state.companyData, action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default companyReducer;