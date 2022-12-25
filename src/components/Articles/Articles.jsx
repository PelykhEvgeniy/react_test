import React, { useState } from "react";
import axios from "axios";
import styles from "./Articles.module.scss"


const Articles = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    React.useEffect(()=>{
       const fetchData = async () => {
        try {
            const {data} = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
                )
                setPosts(data)
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
        setLoading(false)
       }
       fetchData()
}, [])
    return (
        <div>
            <h1>Articles</h1>
            {loading && 'Загрузка...'}
            <div className={styles.wrapper}>
                    {posts.map(post => (
                    <div className={styles.card} key={post.id}>       
                    <h4 className={styles.title}>{post.title}</h4>
                    <p className={styles.descr}>{post.body}</p>
                    <a className={styles.link} href="/">Read now</a>
            </div> 
                ))}
            </div>


         
        </div>

    )
};

export default Articles;