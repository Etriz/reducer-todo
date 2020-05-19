export const INITIAL_STATE = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { item: action.value, completed: false, id: new Date() }];
    case "delete":
      return state;
    default:
      return state;
  }
};
