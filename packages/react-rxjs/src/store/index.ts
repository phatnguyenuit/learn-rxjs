import { BehaviorSubject } from 'rxjs';

const initialState: State = {
  messages: [],
  messageCount: 0,
};

let state = initialState;

const subject = new BehaviorSubject<State>(initialState);
const store = {
  init: () => subject.next(state),
  subscribe: (subscriber: Subscriber<State>) =>
    subject.subscribe((state: State) => subscriber(state)),
  sendMessage: (message: string) => {
    state = {
      ...state,
      messages: [...state.messages, message],
      messageCount: state.messageCount + 1,
    };
    subject.next(state);
  },
  clear: () => {
    state = initialState;
    subject.next(state);
  },
  initialState,
};

export default store;

export type State = {
  messages: string[];
  messageCount: number;
};

export type Subscriber<T> = (state: T) => any;
