import * as React from 'react';
import { useReducer } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { timerMachine, timerMachineConfig } from './timerMachine';

export const Timer = () => {
  const [state, dispatch] = useReducer(
    timerMachine,
    timerMachineConfig.initial
  );

  const { duration, elapsed, interval } = {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  };

  return (
    <div
      className="timer"
      data-state={state}
      style={{
        // @ts-ignore
        '--duration': duration,
        '--elapsed': elapsed,
        '--interval': interval,
      }}
    >
      <header>
        <a
          href="https://xstate.js.org/viz/?gist=78fef4bd3ae520709ceaee62c0dd59cd"
          title="See the visualization"
          target="_xstate"
        >
          XState Minute Timer
        </a>
      </header>
      <svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        fill="none"
        className="circles"
      >
        <circle r="40" cx="50" cy="50" pathLength="1" />
        <circle className="progress" r="40" cx="50" cy="50" pathLength="1" />
      </svg>
      <div className="display">
        <div className="label">{state}</div>
        <div className="elapsed" onClick={() => dispatch({ type: 'TOGGLE' })}>
          {Math.ceil(duration - elapsed)}
        </div>
        <div className="controls"></div>
      </div>
      <div className="actions">
        {state === 'running' && (
          <button
            onClick={() => dispatch({ type: 'TOGGLE' })}
            title="Pause timer"
          >
            <FontAwesomeIcon icon={faPause} />
          </button>
        )}

        {(state === 'paused' || state === 'idle') && (
          <button
            onClick={() => dispatch({ type: 'TOGGLE' })}
            title="Start timer"
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}
      </div>
    </div>
  );
};
