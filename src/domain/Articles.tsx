import {Table} from 'react-bootstrap';
import ArticleService from "../services/ArticleService";
import Article from "../model/Article";

const articleService: ArticleService = new ArticleService();
let articles: Article[] = articleService.findAll();

export default function Articles() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
            </tr>
            </thead>
            <tbody>
            {articles.map((article) => (
                <tr key={article.id}>
                    <td>{article.id}</td>
                    <td>{article.title}</td>
                    <td>{article.content}</td>
                    <td>{article.author}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
