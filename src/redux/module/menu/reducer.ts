import produce from 'immer';
import { AnyAction } from 'redux';
import Cookies from 'js-cookie';

interface menuState {
  isCollapse: boolean;
  menu: [];
}

const menuState: menuState = {
  isCollapse: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus')! : false,
  menu: [],
};

const menu = (state: menuState = menuState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'GENERATE_MENU':
        draftState.menu = action.menu;
        break;

      case 'UPDATE_COLLAPSE':
        draftState.isCollapse = !draftState.isCollapse;
        if (draftState.isCollapse) {
          Cookies.set('sidebarStatus', '1');
        } else {
          Cookies.set('sidebarStatus', '0');
        }
        break;
    }
  });

export default menu;
