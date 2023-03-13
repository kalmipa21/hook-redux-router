let initialState = {
  count: 0,
  wording: "Hai Haii",
};
const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ACTION_INC":
      return {
        ...state,
        count: state.count + actions.value,
      };
    case "ACTION_DEC":
      return {
        ...state,
        count: state.count - actions.value,
      };
    // case "ACTION_RESET":
    //   return {
    //     ...state,
    //     count: 0,
    //   };
    // case "ACTION_WORDING":
    //   return {
    //     ...state,
    //     count: actions.value,
    //   };
    default:
      return state;
  }
};

export default counterReducer;
