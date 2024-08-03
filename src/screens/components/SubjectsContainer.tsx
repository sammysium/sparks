import { useContext } from "react";
import { ISubject } from "../../logic/Structure"
import { SubjectCard } from "./SubjectCard";
import { AppContext, IAppContext } from "../../context/AppContext";

interface IProps {
    subjects: ISubject;
}

export const SubjectsContainer : React.FC<IProps> = ({subjects}) => {
    const { activeRecord, dispatch } = useContext(AppContext) as IAppContext;

    const subjectNames = Object.keys(subjects);
    
    const activateSubject = (subject: string) => {
        dispatch({type:'SET_SUBJECT', payload: subject})
    }

    return (<>
        {subjectNames.map(subject=> <SubjectCard subject={subject} key={subject} onPressHandler={activateSubject} />)}
    </>)
}