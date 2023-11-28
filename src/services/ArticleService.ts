import Article from "../model/Article";
import {v4 as uuid} from "uuid";

export default class ArticleService {

    private authorId: string = uuid(); // uuid
    private articles: Article[] = [
        {id: uuid(), title: "1st Title", content: "This is my first article", createdAt: new Date(), author: this.authorId},
        {id: uuid(), title: "2nd Title", content: "This is my second article", createdAt: new Date(), author: this.authorId},
        {id: uuid(), title: "3rd Title", content: "This is my third article", createdAt: new Date(), author: this.authorId},
    ]; // in-memory storage

    public create(article: Article): Article {
        this.articles.push(article);
        return article;
    }

    public findAll(): Article[] {
        return this.articles;
    }

}