import {useParams} from 'react-router-dom';
import ArticleService from "../services/ArticleService";
import Article from "../model/Article";

export default function ArticleDetails() {
    const {articleId} = useParams();
    console.log(articleId);
    const articleService: ArticleService = new ArticleService();
    const article: Article = articleService.findById(articleId ? articleId : '');
    return (
        <div>
            <h1>ArticleDetails</h1>
            <p>{article.id}</p>
            <p>{article.title}</p>
            <p>{article.content}</p>
            <p>{article.author}</p>
        </div>
    );
}