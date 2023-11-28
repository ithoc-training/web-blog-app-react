import ArticleService from "../services/ArticleService";
import Article from "../model/Article";

/**
 * ArticleDetailsProps is a TypeScript type that defines the shape of the props
 * expected by the ArticleDetails component. Here, it specifies that articleId
 * should be a string.
 */
type ArticleDetailsProps = {
    articleId: string;
};

export default function ArticleDetails({ articleId }: ArticleDetailsProps) {
  return (
    <div>
      <h1>ArticleDetails</h1>
        <h2>{articleId}</h2>
    </div>
  );
}