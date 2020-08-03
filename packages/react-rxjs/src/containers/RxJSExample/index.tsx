import React, { memo, useState, useLayoutEffect, useCallback } from 'react';
import store from 'store';

import classes from './styles.module.css';

export const RxJSExampleComponent: React.FC = () => {
  const [state, setState] = useState(store.initialState);
  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    e => {
      e.preventDefault();
      const input = e.currentTarget.elements.namedItem(
        'messageInput',
      ) as HTMLInputElement;
      store.sendMessage(input?.value);
      input.value = '';
      input.focus();
    },
    [],
  );
  useLayoutEffect(() => {
    store.init();
    const subscription = store.subscribe(setState);
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div className={classes['RxJSExample-root']} id="rxjs-example">
      <h4>RxJS example</h4>
      <div className={classes['RxJSExample-container']}>
        <div className={classes['RxJSExample-input-section']}>
          <form onSubmit={handleSubmit}>
            <input type="text" id="messageInput" name="messageInput" />
            <button type="submit">Send</button> <br />
          </form>
        </div>
        <div className={classes['RxJSExample-state-section']}>
          {JSON.stringify(state, null, 2)}
        </div>
      </div>
    </div>
  );
};

const RxJSExample = memo(RxJSExampleComponent);
RxJSExample.displayName = 'RxJSExample';

export default RxJSExample;
