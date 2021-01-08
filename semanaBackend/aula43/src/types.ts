export type user = {
    id: number,
    name: string,
    email: string,
    type: Types,
    age: number
}

export enum Types {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}
