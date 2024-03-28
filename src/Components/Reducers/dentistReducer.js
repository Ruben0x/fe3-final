export const dentistReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        data: { ...state.data, dentistList: action.payload },
      };
    case 'GET_DENTIST':
      return {
        ...state,
        data: { ...state.data, dentistSelected: action.payload },
      };
    case 'ADD_FAV':
      return {
        ...state,
        data: {
          ...state.data,
          dentistFavs: [...state.data.dentistFavs, action.payload],
        },
      };
    case 'DELETE_FAV':
      const filteredFavs = state.data.dentistFavs.filter(
        (fav) => fav.id !== action.payload
      );
      return {
        ...state,
        data: {
          ...state.data,
          dentistFavs: filteredFavs,
        },
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
  }
};
