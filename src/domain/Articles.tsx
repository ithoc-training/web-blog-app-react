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
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
                <th>Action...</th>
            </tr>
            </thead>
            <tbody>
            {articles.map((article) => (
                <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.content}</td>
                    <td>{article.author}</td>
                    <td><button onClick={() => alert(article.id)}>Details</button></td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
