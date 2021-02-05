import * as sidenav from './sidenav.action';
import { SidenavItem } from '../sidenav-item/sidenav-item.model';
import find from 'lodash-es/find';
import each from 'lodash-es/each';

export interface State {
  sidenavItems: SidenavItem[];
  currentlyOpen: SidenavItem[];
}

const initialState: State = {
  sidenavItems: [ ],
  currentlyOpen: [ ]
};

export function reducer(state = initialState, action: sidenav.Actions): State {
  switch (action.type) {
    case sidenav.ADD_SIDENAV_ITEM: {
      const item = action.payload as SidenavItem;

      if (state.sidenavItems.indexOf(item) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        sidenavItems: [...state.sidenavItems, item]
      });
    }

    case sidenav.REMOVE_SIDENAV_ITEM: {
      const item = action.payload as SidenavItem;

      return Object.assign({}, state, {
        sidenavItems: state.sidenavItems.filter(stateItem => stateItem !== item)
      });
    }

    case sidenav.TOGGLE_OPEN_SIDENAV_ITEM: {
      const item = action.payload as SidenavItem;
      let currentlyOpen = state.currentlyOpen;

      if (state.currentlyOpen.indexOf(item) > -1) {
        if (currentlyOpen.length > 1) {
          currentlyOpen = currentlyOpen.slice(0, currentlyOpen.indexOf(item));
        } else {
          currentlyOpen = [ ];
        }
      } else {
        currentlyOpen = getAllParentItems(item);
      }

      return Object.assign({}, state, {
        currentlyOpen: currentlyOpen
      });
    }

    case sidenav.SET_CURRENTLY_OPEN_BY_ROUTE: {
      const route = action.payload as string;
      let currentlyOpen = [ ];
      const item = findByRouteRecursive(route, state.sidenavItems);

      if (item && item.hasParent()) {
        currentlyOpen = getAllParentItems(item.parent);
      } else if (item) {
        currentlyOpen = [item];
      }

      return Object.assign({}, state, {
        currentlyOpen: currentlyOpen
      });
    }

    default: {
      return state;
    }
  }
}

function getAllParentItems(item: SidenavItem, currentlyOpenTemp: SidenavItem[] = [ ]) {
  currentlyOpenTemp.unshift( item );

  if (item.hasParent()) {
    return getAllParentItems(item.parent, currentlyOpenTemp);
  } else {
    return currentlyOpenTemp;
  }
}

function findByRouteRecursive(route: string, collection: SidenavItem[] = this.sidenavItems): SidenavItem | null {
  let result = collection.find(item => item.route === route);

  if (!result) {
    collection.forEach(item => {
      if (item.hasSubItems()) {
        const found = findByRouteRecursive(route, item.subItems || []);

        if (found) {
          result = found;
          return false;
        }
      }
    });
  }

  return result;
}

export const getSidenavItems = (state: State) => state.sidenavItems;
export const getSidenavCurrentlyOpen = (state: State) => state.currentlyOpen;
