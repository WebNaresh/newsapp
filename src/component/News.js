import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {

        pageSize: 9,
        country: "in",
        category:"general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category:PropTypes.string
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
        let url = `https://newsapi.org/v2/top-headlines?&country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=9`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1})
        this.componentDidMount();
  }

    handlePreviousClick = async () => {
        this.setState({ page: this.state.page - 1})
        this.componentDidMount();
    }
    render() {


        return (<div className='container my-3 ' >
            <h1 className='text-center' >NewsMonkey Top Headline from {this.props.category} </h1>
            {this.state.loading && < Spinner />}
            <div className="row ">
                {!this.loading && this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem sources={element.source.name} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} loading={this.state.loading} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} NewsUrl={element.url} imageUrl={element.urlToImage} />
                    </div>
                })}
            </div>
            <div className="container">

                {!this.state.loading && <div id='hideME' className="d-flex justify-content-between">

                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick} > &larr; Previous</button>

                    <button id='myBtn' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
                }
            </div>
        </div>
        )


    }
}

export default News
