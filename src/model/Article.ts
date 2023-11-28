export default interface Article {
    id: string; // uuid
    title: string;
    content: string;
    createdAt: Date;
    author: string; // uuid
}