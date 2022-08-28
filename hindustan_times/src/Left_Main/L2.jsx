// import { useEffect } from "react";
// import { useState } from "react"
// import axios from "axios"
// import "./L2.css"
// export default function L2() {
//     const [articles, setArticles] = useState([]);
//     useEffect(() => {
//         const getArticles = async () => {
//             const res = await axios.get("https://newsdata.io/api/1/news?apikey=pub_106875ffbf50ea0f1c8dc0b5610fd449b7b17&q=india%20news")
//             console.log(res)
//             setArticles(res.data.articles)
//         }
//         getArticles()
//     }, [])
//     return (
//         <>
//             {articles.map(article => {
//                 return (
//                     <div>
//                         <h4>{article.title}</h4>
//                         <p className="grey">Published on {article.publishedAt}</p>
//                         <hr />
//                     </div>
//                 )
//             })}
//         </>
//     )
// }


