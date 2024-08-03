export interface ILevel {
    levelNumber: number;
    fromAge: number;
    toAge: number;
    scorePoint: number;
    description: string
}
interface IContentDetails {
    code: string,
    levels: ILevel[]
}

interface IContent {
    [name:string]: IContentDetails;
}

export interface ISubject {
    [name: string]: IContentDetails[]
}

export const Content: IContent = {
    LETTERS: {
        code: "LETTERS",
        levels: [{
            levelNumber: 1,
            fromAge: 5,
            toAge: 10,
            scorePoint: 10,
            description: ""
        }]
    },
    ANIMALS: {
        code: "ANIMALS",
        levels: [{
            levelNumber: 1,
            fromAge: 5,
            toAge: 10,
            scorePoint: 10,
            description: ""
        }]
    },
    MATH: {
        code: "MATH",
        levels: [{
            levelNumber: 1,
            fromAge: 5,
            toAge: 10,
            scorePoint: 10,
            description: ""
        }]
    }
}



