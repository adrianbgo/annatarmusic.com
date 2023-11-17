import { ObjectId } from "mongodb";

export interface Blog {
    _id: ObjectId;
    title: string;
    content: string;
    tags: string[];
    createdAt: Date;
}