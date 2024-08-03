import { SUBJECTS } from "../content";
import { ILevel } from "./Structure";


class LevelService {

    loadContent = (subject: string): ILevel[] => {
        const subjectLevels = SUBJECTS[subject]
        if (subjectLevels) {
            console.log(subjectLevels)
            return []
        } else {
            throw new Error("Subject not found")
        }
    }
}

export default new LevelService();