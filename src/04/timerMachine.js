import { createMachine, assign } from 'xstate';

const notExpired = (context, event) => {
  return context.elapsed < context.duration;
};

export const timerMachine = createMachine({
  initial: 'idle',
  context: {
    duration: 5,
    elapsed: 0,
    interval: 0.1,
  },
  states: {
    idle: {
      entry: assign({
        duration: 5,
        elapsed: 0,
      }),
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        // Change this TICK transition into a guarded transition
        // to go to `expired` when `context.elapsed + context.interval`
        // is greater than the total `context.duration`.
        TICK: [
          {
            cond: notExpired,
            actions: assign({
              elapsed: (context) => context.elapsed + context.interval,
            }),
          },
          { target: 'expired' },
        ],
        TOGGLE: 'paused',
        ADD_MINUTE: {
          actions: assign({
            duration: (ctx) => ctx.duration + 60,
          }),
        },
      },
    },
    paused: {
      on: {
        TOGGLE: 'running',
        RESET: 'idle',
      },
    },

    // Add an `expired` state here.
    // It should go to the `idle` state on the `RESET` event.
    expired: {
      entry: assign({
        elapsed: (context) => context.duration,
      }),
      on: {
        RESET: 'idle',
      },
    },
  },
});
