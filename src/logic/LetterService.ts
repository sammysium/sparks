interface ILevelMap {
    [levelName: number]: Function
}
class LetterService {
    private letters = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]


    private generateLevelOne = () : string[] => {
        return this.letters.map(l=>l.toUpperCase());
    }

    private maps : ILevelMap = {
        1: this.generateLevelOne
   }

    generateGame = (level: number) => {
        const func = this.maps[level]
        if (func) {
            return func();
        }
        throw new Error("Error loading the level");
        
    }

}

export default new LetterService();