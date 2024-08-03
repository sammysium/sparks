import { IActiveRecord } from "../AppContext";

export type Actions =
  { type: 'SET_SUBJECT'; payload: string }
  | { type: 'SET_LEVEL'; payload: number }
  /*
  | { type: 'UPDATE_SECTION'; payload: Partial<Section> }
  | { type: 'CREATE_NEW_SUB_SECTION'; payload: { subSection: SubSection, intoSectionIndex: number } }
  | { type: 'DELETE_SUB_SECTION'; payload: SubSection }
  | { type: 'UPDATE_SUB_SECTION'; payload: {id: string, subSection: Partial<SubSection> }}
  | { type: 'DELETE_QUESTION'; payload: string }
  | { type: 'SET_VIEW_MODE'; payload: boolean}
  | { type: 'SET_ACTIVE_SECTION'; payload: number }
  | { type: 'SET_ACTIVE_SUB_SECTION'; payload: { sectionIndex: number; subSectionIndex: number } }
  | { type: 'SET_ACTIVE_QUESTION'; payload: { sectionIndex: number; subSectionIndex: number; questionIndex: number } }
  | { type: 'HANDLE_DND', payload: IDragAndDrop}
  | { type: 'ADD_NEW_QUESTION', payload: Question}
  | { type: 'EDIT_QUESTION', payload: Question}
  */
  ;

  export interface IAppState {
    activeRecord: IActiveRecord,
  }


export const AppReducer = (state: IAppState, action: Actions): IAppState => {

  switch (action.type) {
    
    case 'SET_SUBJECT':
      console.log(action.payload, action.type)
      return {
        ...state,
        activeRecord: {
          ...state.activeRecord,
          activeSubject: action.payload,
        },
      };

    case 'SET_LEVEL':
    
      return {
        ...state,
        activeRecord: {
          ...state.activeRecord,
          activeLevel: action.payload,
        }
      }

    default:
      return state;
  }
};