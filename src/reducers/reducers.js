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
      return [...state, { item: action.value, completed: false, id: Date.now() }];
    case "delete":
      return state;
    case "toggle":
      const toggledState = state.map((item) => {
        if (item.id === action.id) return { ...item, completed: !item.completed };
        else return item;
      });
      return [...toggledState];
    default:
      return state;
  }
};
