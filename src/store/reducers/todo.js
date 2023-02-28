import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/types/todo";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };
    }

    // case REMOVE_TODO: {
    //   const { id } = action.payload;
    //   state.allIds = state.allIds.filter((task) => task.id !== id - 1);
    //   delete state.byIds[id];
    //   state.byIds = state.byIds.filter((task) => task.id !== id);

    //   delete state.allIds[id - 1];

    //   console.log(state);
    //   state.allIds.filter((task) => task.id !== id);

    //   return {
    //     ...state,
    //   };
    // }

    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: state.allIds.filter((task) => task.id !== id),
      };
    }

    default:
      return state;
  }
}
