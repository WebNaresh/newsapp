import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {

        pageSize: 5,
        country: "in",
        category: "general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 9

        }
    }
    async componentDidMount() {
        this.props.setProgress(40)
        let url = `https://newsapi.org/v2/top-headlines?&country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)

    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        // this.componentDidMount();
    }

    handlePreviousClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.componentDidMount();
    }

    fetchMoreData = async () => {
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?&country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    render() {


        return (
            < >
                <h1 className='text-center' >NewsMonkey Top {this.props.category}  Headline</h1>
                {/* {this.state.loading && < Spinner />} */}

                <div>
                    {this.props.notFound && <Link className="d-flex justify-content-center btn btn-primary m-3 " to={"/"}>Home</Link>}
                </div>
                <InfiniteScroll style={{    overflow: "hidden"}}
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container ">
                        <div className="row ">
                            { this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem sources={element.source.name} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} loading={this.state.loading} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} NewsUrl={element.url} imageUrl={element.urlToImage} />
                                    </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container">

                    {!this.state.loading && <div id='hideME' className="d-flex justify-content-between">

                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick} > &larr; Previous</button>

                        <button id='myBtn' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div>
                    }
                </div> */}
            </>
        )


    }
}

export default News
