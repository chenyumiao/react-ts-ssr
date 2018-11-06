export interface data{
    id:number,
    imgUrl?:string,
    link?:string,
    location?:string
}
export interface List{
    isFetching:boolean,
    data:data[],
}
export interface State{
    listReducer:List
}