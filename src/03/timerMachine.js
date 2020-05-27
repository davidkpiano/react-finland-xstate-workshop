import { createMachine, assign } from 'xstate';

// Parameterize the assign actions here:
const tick = assign({
  elapsed: (context, event) => {
    return context.elapsed + context.interval;
  },
});

const addMinute = assign({
  duration: (ctx) => ctx.duration + 60,
});

const reset = assign({
  duration: 60,
  elapsed: 0,
});

const logRunning = (context, event) => {
  console.log('Going to running!!');
};

const greetUser = () => {
  alert('Hello, you!');
};

export const timerMachine = createMachine({
  initial: 'idle',
  context: {
    duration: 60,
    elapsed: 0,
    interval: 0.1, // context.interval * 1000
  },
  states: {
    idle: {
      // Parameterize this action:
      entry: [reset, 'greetUser'],

      on: {
        TOGGLE: {
          target: 'running',
          actions: logRunning,
        },
      },
    },
    running: {
      on: {
        // On the TICK event, the context.elapsed should be incremented by context.interval
        // ...
        TICK: {
          actions: tick,
        },

        TOGGLE: 'paused',
        ADD_MINUTE: {
          // Parameterize this action:
          actions: addMinute,
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
