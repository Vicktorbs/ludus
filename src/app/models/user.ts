export interface User {
    id: number,
    userData: {
        name: string,
        lastname: string,
        secondlastname: string,
        age: number,
        school: string,
        schoolgrade: string,
        appdata: {
            currentleverl: number,
            groups: string,
            performance: [{subject: string, score: number}]
        }
    },
    tuthordata: {
        name: string,
        lastname: string,
        secondlastname: string,
        terms: boolean
    },
    email: string,
    password: string
}