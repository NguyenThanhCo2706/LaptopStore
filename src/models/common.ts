








export interface PaginationParams {
    _limit: number;
    _page: number;
    _total: number;
}

export interface ListResponse<T> {
    list: T[];
    paging: PaginationParams;
}