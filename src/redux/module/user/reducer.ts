import { AnyAction } from 'redux';
import produce from 'immer';

interface userState {
  token: string;
}

const userState: userState = {
  token: ''
};

const user = (state: userState = userState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'SET_TOKEN':
        draftState.token = action.token;
        localStorage.setItem('token', action.token);
        break;
    }
  });

export default user;
