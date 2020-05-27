import { createMachine, assign } from 'xstate';

const initialContext = {
  duration: 60,
  elapsed: 0,
  interval: 0.1,
};

export const timerMachine = createMachine({
  initial: 'idle',
  context: initialContext,

  states: {
    idle: {
      entry: assign(initialContext),
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        TOGGLE: { target: 'paused' },

        ADD_MINUTE: {
          actions: assign({
            duration: (context, event) => {
              return context.duration + 60;
            },
          }),
          // target: undefined
        },
      },
    },
    paused: {
      on: {
        TOGGLE: 'running',
        RESET: 'idle',
      },
    },
  },
});
