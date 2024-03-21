import jsonData from './stackline_frontend_assessment_data_2021.json'

const initialState = {
  data: jsonData,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchData':
      return {
        ...state,
        data: jsonData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;