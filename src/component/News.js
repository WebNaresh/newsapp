import NewsItem from './NewsItem'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'

const News = (props) => {

    const [articles, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(7)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async() => {
        props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?&country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true );
        props.setProgress(60)
        let data = await fetch(url);
        props.setProgress(70)
        let parsedData = await data.json()
        props.setProgress(80)
        
        setArticle(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)

    }

useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`
    updateNews()
    
}, [])
    
    
    const handlePrevClick = async () =>{
        setPage(page-1)
        updateNews()
    }
    const handleNextClick = async () =>{
        setPage(page+1)
        updateNews()
    }

    const fetchMoreData = async ()=>{

        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?&country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`;
        setLoading( true );
        let data = await fetch(url);
        let parsedData = await data.json()
        
        setArticle(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
            setLoading(false)
        }







    return (
        < >
            <h1 style={{marginTop:"6rem"}} className='text-center my-5' >NewsMonkey Top {props.category}  Headline</h1>
            {/* {loading && < Spinner />} */}

            <div>
                {props.notFound && <Link className="d-flex justify-content-center btn btn-primary m-3 " to={"/"}>Home</Link>}
            </div>
            <InfiniteScroll style={{ overflow: "hidden" }}
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container ">
                    <div className="row ">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem sources={element.source.name} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} loading={loading} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} NewsUrl={element.url} imageUrl={element.urlToImage} />
                                </div>)
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}




export default News


News.defaultProps = {

    pageSize: 5,
    country: "in",
    category: "general"
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}