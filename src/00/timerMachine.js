export const timerMachineConfig = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        TOGGLE: 'paused',
      },
    },
    paused: {
      on: {
        TOGGLE: 'running',
      },
    },
  },
};

export const timerMachine = (state, event) => {
  return timerMachineConfig.states[state]?.on?.[event.type] || state;
};
