import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            btn:false
            
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c26dc6dd6f754cbeac24769937a3d102&page=1&pageSize=12";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults })

    }

    handleNextClick = async () => {
        if ( this.state.page +1> Math.ceil( this.state.totalResults/12 )) {
                
        }else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c26dc6dd6f754cbeac24769937a3d102&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let parsedData = await data.json()
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
        if ( this.state.page > Math.floor( this.state.totalResults/12 )) {
                
            this.setState({btn:true})
    }
    }

    handlePreviousClick = async () => {

        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c26dc6dd6f754cbeac24769937a3d102&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    render() {


        return (<div className='container my-3 ' >
                <h1>NewsMonkey Top Headline</h1>
                <div className="row ">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} NewsUrl={element.url} imageUrl={element.urlToImage} />
                        </div>
                    })}
                </div>
                <div className="container">

                    <div className="d-flex justify-content-between">
                        <button   disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreviousClick} > &larr; Previous</button>

                        <button id='myBtn' disabled={this.state.btn} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div>

                </div>
            </div>)
        
    }
}

export default News
