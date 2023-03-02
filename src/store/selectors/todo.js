const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.allIds || [];

export const todoDoneIdsSelector = (store) =>
  todoIdsSelector(store)
    .map((id) => todoByIdSelector(store, id))
    ?.filter((Ids) => Ids.complete);

export const todoByIdSelector = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }

  const todoItem = todoStore.byIds[id];

  return {
    ...todoItem,
    id,
  };
};

// export const todosSelector = (store) =>
//   todoIdsSelector(store).map((id) => todoByIdSelector(store, id));

export const todosSelector = (store) => {
  let result = [];
  todoIdsSelector(store).forEach((id) => {
    const myId = todoByIdSelector(store, id);
    if (!myId.complete) {
      result.push(myId);
    }
  });
  return result;
};
