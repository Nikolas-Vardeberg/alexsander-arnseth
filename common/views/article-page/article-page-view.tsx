import { ArticlePage } from "@/common/types/pages/article.types";


const ArticlePageView = ({ data: page }: { data: ArticlePage }) => {
    return(
        <>
            <pre>
                {JSON.stringify(page, undefined, 2)}
            </pre>
        </>
    )
}

export default ArticlePageView;