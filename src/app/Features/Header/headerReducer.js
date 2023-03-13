let title = "Navbar";

const counterReducer = (state = title, actions) => {
  switch (actions.type) {
    case "CHANGE":
      return actions.value;

    default:
      return state;
  }
};

export default counterReducer;
