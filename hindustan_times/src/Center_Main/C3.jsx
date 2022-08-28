import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import "./C3.css"
export default function C3() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/everything?q=Apple&pageSize=1&from=2022-08-28&sortBy=popularity&apiKey=1c2f8a5a5cc546da80437669d66101fc")
            setArticles(res.data.articles)
        }
        getArticles()
    }, [])
    return (
        <>
            {articles.map(article => {
                return (
                    <div className="C1div">
                        <h3>{article.title}</h3>
                        <p className="source">{article.source.name}</p>
                        <p className="grey">Updated on {article.publishedAt}</p>
                        <img className="C1bigimg" src={article.urlToImage} alt="" />
                    </div>
                )
            })}
        </>
    )
}


