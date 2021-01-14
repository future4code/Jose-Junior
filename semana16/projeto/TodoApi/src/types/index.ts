export type user = {
    id: number,
    name: string,
    nickname: string,
    email: string
}

export type task = {
    id: number,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: number,
    creatorNickname: string
}