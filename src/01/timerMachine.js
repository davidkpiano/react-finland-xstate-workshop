import { createMachine } from 'xstate';

// Use the machine you created in Exercise 00
// export const timerMachine = // ...
export const timerMachine = createMachine({
  initial: 'idle',
  states: {
    idle: {
      entry: [
        () => {
          console.log('Entered idle');
        },
        () => {
          console.log('Doing something else');
        },
      ],
      exit: () => {
        console.log('Exited idle');
      },
      on: {
        TOGGLE: {
          target: 'running',
          actions: () => {
            console.log('💥 Going from idle -> running');
          },
        },
      },
    },
    running: {
      entry: () => {
        console.log('Entered running');
      },
      on: {
        TOGGLE: 'paused',
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
