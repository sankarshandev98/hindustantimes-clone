import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import "./R1.css"
export default function R1() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&pageSize=1&apiKey=1c2f8a5a5cc546da80437669d66101fc")
            console.log(res)
            setArticles(res.data.articles)
        }
        getArticles()
    }, [])
    return (
        <>
            {articles.map(article => {
                return (
                    <div className="R1div">
                        <h4>{article.title}</h4>
                        <img src={article.urlToImage} alt="" />
                        <hr />
                    </div>
                )
            })}
        </>
    )
}


