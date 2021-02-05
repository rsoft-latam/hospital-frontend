import * as inbox from './inbox.action';
import { InboxGroup, InboxType, Mail } from '../mail.model';


export interface State {
  mails: Mail[];
  currentlyOpen: Mail;
  activeGroup: InboxGroup;
  activeType: InboxType;
  showOnlyStarred: boolean;
}

const initialState: State = {
  mails: [ ],
  currentlyOpen: null,
  activeGroup: 'primary',
  activeType: 'none',
  showOnlyStarred: false
};

export function reducer(state = initialState, action: inbox.Actions): State {
  switch (action.type) {
    case inbox.BULK_ADD_MAIL: {
      const mails =  action.payload;

      return Object.assign({}, state, {
        mails: state.mails.concat(mails)
      });
    }

    case inbox.ADD_MAIL: {
      const mail =  action.payload;

      if (state.mails.indexOf(mail) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        mails: [...state.mails, mail]
      });
    }

    case inbox.REMOVE_MAIL: {
      const mail =  action.payload;

      return Object.assign({}, state, {
        mails: state.mails.filter(stateMail => stateMail !== mail)
      });
    }

    case inbox.OPEN_MAIL: {
      const mail = action.payload;

      const index = state.mails.indexOf(mail);

      if (index > -1) {
        mail.read = true;
        state.mails[index] = mail;
      }

      return Object.assign({}, state, {
        mails: state.mails,
        currentlyOpen: mail
      });
    }

    case inbox.CLOSE_MAIL: {
      return Object.assign({}, state, {
        currentlyOpen: null
      })
    }

    case inbox.SET_ACTIVE_GROUP: {
      const group = action.payload;

      return Object.assign({}, state, {
        currentlyOpen: null,
        activeGroup: group,
        activeType: null,
        showOnlyStarred: false,
      });
    }

    case inbox.SET_ACTIVE_TYPE: {
      const type = action.payload;

      return Object.assign({}, state, {
        currentlyOpen: null,
        activeGroup: null,
        activeType: type,
        showOnlyStarred: false
      });
    }

    case inbox.SHOW_ONLY_STARRED: {
      return Object.assign({}, state, {
        currentlyOpen: null,
        activeGroup: null,
        activeType: null,
        showOnlyStarred: true
      });
    }

    case inbox.REMOVE_ALL_MAILS: {
      return Object.assign({}, state, {
        mails: [ ]
      })
    }

    default: {
      return state;
    }
  }
}

export const getMails = (state: State) => state.mails;
export const getCurrentlyOpen = (state: State) => state.currentlyOpen;
export const getActiveGroup = (state: State) => state.activeGroup;
export const getActiveType = (state: State) => state.activeType;
export const getShowOnlyStarred = (state: State) => state.showOnlyStarred;
