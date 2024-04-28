export interface Select {
    select: string[]
}

export interface Paginate {
    pageSize: number;
    pageIndex: number;
}

export interface Order {
    order: "asc" | "desc";
}