import { createContext, useMemo, useReducer } from "react";
import { Actions, AppReducer } from "./reducers/fbReducer";

export interface IActiveRecord {
  activeSubject: string,
  activeLevel: number,
}

export interface IAppContext {
  activeRecord: IActiveRecord,
  dispatch: React.Dispatch<Actions>
}



export const AppContext = createContext<IAppContext | null>(null);


interface IProps {
  children: React.ReactNode
}


export const AppContextProvider: React.FC<IProps> = ({ children }) => {


  const initialActiveRecord: IActiveRecord = {
    activeLevel: -1,
    activeSubject: ""
  }

  const [state, dispatch] = useReducer(AppReducer, {
    activeRecord: initialActiveRecord,
  })

  const contextValue = useMemo(
    () => ({activeRecord: state.activeRecord, dispatch }),
    [ state.activeRecord, dispatch]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}