import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                THis is a news Component
                <NewsItem/>
            </div>
        )
    }
}

export default News
