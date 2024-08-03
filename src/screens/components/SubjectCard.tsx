import { Text, TouchableOpacity } from "react-native";

interface IProps {
    subject: string,
    onPressHandler: (subject: string) => void
}


export const SubjectCard: React.FC<IProps> = ({ subject, onPressHandler }) => {
    return (<TouchableOpacity
            onPress={()=>onPressHandler(subject)}
    >
        <Text>{subject}</Text>
    </TouchableOpacity>)
}