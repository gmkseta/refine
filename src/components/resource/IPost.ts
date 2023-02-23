import {ICategory} from "./ICategory";

export interface IPost{
    id: number;
    title: string;

    category: ICategory;


}