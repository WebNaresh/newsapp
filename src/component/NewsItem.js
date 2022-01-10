import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, NewsUrl, loading, date, author ,sources} = this.props;
        return (
            <div className='my-3' >
                {!loading && <div className="card widht" style={{ margin: "0 2px" }}>
                    <div>
                        <img src={!imageUrl ? "https://gumlet.assettype.com/bloombergquint%2F2021-11%2Fc7d8b0ac-d9d8-4647-9a61-357e53e3347a%2F374659277.jpg?rect=0%2C118%2C3998%2C2099&w=1200&auto=format%2Ccompress&ogImage=true" : imageUrl} style={{ height: "160px", }} className="widht card-img-top" alt="..."
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://gumlet.assettype.com/bloombergquint%2F2021-11%2Fc7d8b0ac-d9d8-4647-9a61-357e53e3347a%2F374659277.jpg?rect=0%2C118%2C3998%2C2099&w=1200&auto=format%2Ccompress&ogImage=true"
                            }}
                        />
                    </div>
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <span style={{zIndex: "1"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{sources}</span>
                        <p className="card-text">{!description ? ".............................................................................................................................................................." : description}......</p>
                        <p>By {author} Dated on:  {new Date(date).toLocaleTimeString()}</p>
                        <a href={NewsUrl} rel="noreferrer" target={"_blank"} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>}
            </div>
        )
    }
}

export default NewsItem
