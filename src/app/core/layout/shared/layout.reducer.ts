import * as layout from './layout.action';
import { updateObject } from '../../utils/update-object';


export interface State {
  layout?: string;
  sidenavOpen?: boolean;
  sidenavCollapsed?: boolean;
  sidenavAlign?: string;
  sidenavMode?: string;
  sidenavDisableClose?: boolean;
  quickpanelOpen?: boolean;
  layoutBoxed?: boolean;
  settingsOpen?: boolean;
  cardElevation?: string;
}

const initialState: State = {
  layout: 'alpha',
  sidenavOpen: true,
  sidenavCollapsed: true,
  sidenavAlign: 'start',
  sidenavMode: 'side',
  sidenavDisableClose: true,
  quickpanelOpen: false,
  layoutBoxed: false,
  settingsOpen: false,
  cardElevation: 'card-elevation-z1'
};

// Layouts

const layouts: { [name: string]: Partial<State> } = {
  'alpha': {
    layout: 'alpha',
    sidenavOpen: true,
    sidenavCollapsed: true,
    sidenavMode: 'side',
    sidenavDisableClose: true,
    layoutBoxed: false
  },
  'beta': {
    layout: 'beta',
    sidenavOpen: true,
    sidenavCollapsed: false,
    sidenavMode: 'side',
    sidenavDisableClose: true,
    layoutBoxed: false
  },
  'gamma': {
    layout: 'gamma',
    sidenavOpen: false,
    sidenavCollapsed: false,
    sidenavMode: 'over',
    sidenavDisableClose: false,
    layoutBoxed: true
  },
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {

    case layout.OPEN_SIDENAV: {
      return updateObject<State>(state, {
        sidenavOpen: true
      });
    }

    case layout.CLOSE_SIDENAV: {
      return updateObject<State>(state, {
        sidenavOpen: false
      });
    }

    case layout.TOGGLE_SIDENAV: {
      return updateObject<State>(state, {
        sidenavOpen: !state.sidenavOpen
      });
    }

    case layout.ENABLE_SIDENAV_COLLAPSE: {
      return updateObject<State>(state, {
        sidenavCollapsed: true
      });
    }

    case layout.DISABLE_SIDENAV_COLLAPSE: {
      return updateObject<State>(state, {
        sidenavCollapsed: false
      });
    }

    case layout.TOGGLE_SIDENAV_COLLAPSE: {
      return updateObject<State>(state, {
        sidenavCollapsed: !state.sidenavCollapsed
      });
    }

    case layout.SET_SIDENAV_ALIGN: {
      const mode = action.payload;

      return updateObject<State>(state, {
        sidenavAlign: mode
      });
    }

    case layout.SET_SIDENAV_MODE: {
      const mode = action.payload;

      return updateObject<State>(state, {
        sidenavMode: mode
      });
    }

    case layout.SET_SIDENAV_DISABLE_CLOSE: {
      const mode = action.payload;

      return updateObject<State>(state, {
        sidenavDisableClose: mode
      });
    }

    case layout.OPEN_QUICKPANEL: {
      return updateObject<State>(state, {
        quickpanelOpen: true
      });
    }

    case layout.CLOSE_QUICKPANEL: {
      return updateObject<State>(state, {
        quickpanelOpen: false
      });
    }

    case layout.TOGGLE_QUICKPANEL: {
      return updateObject<State>(state, {
        quickpanelOpen: !state.quickpanelOpen
      });
    }

    case layout.SELECT_LAYOUT: {
      const selectedLayout = action.payload;

      if (layouts[selectedLayout]) {
        return updateObject<State>(state, layouts[selectedLayout]);
      }

      return updateObject<State>(state, {
        layout: selectedLayout
      });
    }

    case layout.ENABLE_LAYOUT_BOXED: {
      return updateObject<State>(state, {
        layoutBoxed: true
      });
    }

    case layout.DISABLE_LAYOUT_BOXED: {
      return updateObject<State>(state, {
        layoutBoxed: false
      });
    }

    case layout.TOGGLE_LAYOUT_BOXED: {
      return updateObject<State>(state, {
        layoutBoxed: !state.layoutBoxed
      });
    }

    case layout.OPEN_SETTINGS: {
      return updateObject<State>(state, {
        settingsOpen: true
      })
    }

    case layout.CLOSE_SETTINGS: {
      return updateObject<State>(state, {
        settingsOpen: false
      })
    }

    case layout.TOGGLE_SETTINGS: {
      return updateObject<State>(state, {
        settingsOpen: !state.settingsOpen
      })
    }

    case layout.SET_CARD_ELEVATION: {
      const elevation = action.payload;

      return updateObject<State>(state, {
        cardElevation: elevation
      })
    }

    default:
      return state;
  }
}

export const getSidenavOpen = (state: State) => state.sidenavOpen;
export const getSidenavCollapsed = (state: State) => state.sidenavCollapsed;
export const getSidenavAlign = (state: State) => state.sidenavAlign;
export const getSidenavMode = (state: State) => state.sidenavMode;
export const getSidenavDisableClose = (state: State) => state.sidenavDisableClose;
export const getQuickpanelOpen = (state: State) => state.quickpanelOpen;
export const getLayout = (state: State) => state.layout;
export const getLayoutBoxed = (state: State) => state.layoutBoxed;
export const getSettingsOpen = (state: State) => state.settingsOpen;
export const getCardElevation = (state: State) => state.cardElevation;

