const INCREMENT = "INCREMENT";
const initialState = {
  count: 0,
};

function increment() {
  return {
    type: INCREMENT,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

function handleIncrement() {
  store.dispatch(increment());
}

const store = Redux.createStore(reducer, initialState);

function updateUI() {
  const countElement = document.getElementById("count");
  countElement.textContent = store.getState().count;
}

const incrementBtn = document.getElementById("increment");
incrementBtn.addEventListener("click", handleIncrement);

updateUI();
store.subscribe(updateUI);
