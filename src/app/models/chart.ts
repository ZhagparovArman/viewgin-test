export interface Graph {
    list: List[]
}

export interface List {
    id: number,
    title: string,
    data: [string, number][]
}


export interface Donut {
    list: {title: string, views: number}[]
}