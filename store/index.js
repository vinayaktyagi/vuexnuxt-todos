export const state = {
  counter: 0,
  todos:[
  	{task: "Eat"},
  	{task:"Sleep"},
  	{task:"Code"}
  ]
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  }
};
