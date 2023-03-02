import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FILTER_TODO,
} from "../actions/types/todo";

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

    case REMOVE_TODO: {
      const { id } = action.payload;

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: null,
        },
        allIds: state.allIds.filter((current) => current !== id),
      };
    }

    case FILTER_TODO: {
      const { id } = action.payload;

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            complete: true,
          },
        },
      };
    }

    default:
      return state;
  }
}
