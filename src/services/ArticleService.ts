import Article from "../model/Article";

export default class ArticleService {

    private authorId: string = '3c7b502b-fed6-4d7b-a992-d9aefca891b9'; // uuid
    private articles: Article[] = [
        {
            id: 'fa47d9c4-f675-4c9c-92a8-fd9b8563e5b8', title: "1st Title",
            content: "This is my first article", createdAt: new Date(), author: this.authorId
        },
        {
            id: 'f66ced33-2b91-4476-91c9-361f190ad7ec', title: "2nd Title",
            content: "This is my second article", createdAt: new Date(), author: this.authorId
        },
        {
            id: '64e4b667-87f7-48fd-8014-06369feb9ecf', title: "3rd Title",
            content: "This is my third article", createdAt: new Date(), author: this.authorId
        }
    ]; // in-memory storage

    public create(article: Article): Article {
        this.articles.push(article);
        return article;
    }

    public findAll(): Article[] {
        return this.articles;
    }

    public findById(id: string): Article {
        return this.articles.find(article => article.id === id)!;
    }

}