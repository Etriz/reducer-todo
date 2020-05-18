export const INITIAL_STATE = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "01":
      return state;
    default:
      return state;
  }
};
