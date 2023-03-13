let initialState = {
  hitung: 0,
  wording: "Hai Haii",
};
const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ACTION_INC":
      return {
        ...state,
        hitung: state.hitung + actions.value,
      };
    case "ACTION_DEC":
      return {
        ...state,
        hitung: state.hitung - actions.value,
      };
    // case "ACTION_RESET":
    //   return {
    //     ...state,
    //     count: 0,
    //   };
    // case "ACTION_WORDING":
    //   return {
    //     ...state,
    //     wording: actions.wording,
    //   };
    default:
      return state;
  }
};

export default counterReducer;
