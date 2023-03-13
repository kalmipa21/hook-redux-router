let title = "Navbar";

const counterReducer = (state = title, actions) => {
  switch (actions.type) {
    case "CHANGE":
      return {
        title: actions.value,
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
