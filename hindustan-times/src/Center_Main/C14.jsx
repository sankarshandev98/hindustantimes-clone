import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import "./C14.css"
export default function C14() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&pageSize=4&apiKey=1c2f8a5a5cc546da80437669d66101fc")
            setArticles(res.data.articles)
        }
        getArticles()
    }, [])
    return (
        <>
            {articles.map(article => {
                return (
                    <div className="C2div">
                        <div className="C2smalltitle">
                            <h3>{article.title}</h3>
                            <p className="source">{article.source.name}</p>
                            <p className="grey">Updated on {article.publishedAt}</p>
                        </div>
                        <div className="C2smallimg">
                            <img className="C2img" src={article.urlToImage} alt="" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}


