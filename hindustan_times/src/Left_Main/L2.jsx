import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import "./L2.css"
export default function L2() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-08-26&to=2022-08-26&sortBy=popularity&pageSize=5&apiKey=1c2f8a5a5cc546da80437669d66101fc")
            console.log(res)
            setArticles(res.data.articles)
        }
        getArticles()
    }, [])
    return (
        <>
            {articles.map(article => {
                return (
                    <div>
                        <h4>{article.title}</h4>
                        <p className="grey">Published on {article.publishedAt}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}


