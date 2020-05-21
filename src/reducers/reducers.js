export const INITIAL_STATE = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const actionTypes = { add: "ADD", delete: "DELETE", toggle: "TOGGLE" };

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { item: action.value, completed: false, id: Date.now() }];
    case "DELETE":
      const deleteState = state.filter((item) => {
        if (item.completed) return null;
        else return item;
      });
      return [...deleteState];
    case "TOGGLE":
      const toggledState = state.map((item) => {
        if (item.value === action.value) return { ...item, completed: !item.completed };
        else return item;
      });
      return [...toggledState];
    default:
      return state;
  }
};
