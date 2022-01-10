import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": null,
            "title": null,
            "description": "On a typical year, the Golden Globe Awards serve as the gold standard for tipsy fun. But this is not a typical year for Hollywood's quirkiest award show.",
            "url": "https://www.cnn.com/2022/01/09/entertainment/golden-globes-winners-2022/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211202190134-west-side-story-super-tease.jpg",
            "publishedAt": "2022-01-10T04:14:00Z",
            "content": null
        },
        {
            "source": { "id": null, "name": "NBCSports.com" },
            "author": "Charean Williams",
            "title": "NFL announces wild card weekend schedule - NBC Sports - NFL",
            "description": "The NFL announced the schedule for wild card weekend, with playoff games on Jan. 15-17.Two games will be played on Saturday (at 4:30 p.m. ET and 8:15 p.m. ET), three on Sunday (1 p.m. ET, 4:30 p.m. ET, and 8:15 p.m. ET), and one on Monday (8:15 p.m. ET).Satur…",
            "url": "https://profootballtalk.nbcsports.com/2022/01/09/nfl-announces-wild-card-weekend-schedule/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/11/GettyImages-579842554-1-e1637075295751.jpg",
            "publishedAt": "2022-01-10T03:24:00Z",
            "content": "The NFL announced the schedule for wild card weekend, with playoff games on Jan. 15-17.\r\nTwo games will be played on Saturday (at 4:30 p.m. ET and 8:15 p.m. ET), three on Sunday (1 p.m. ET, 4:30 p.m.… [+712 chars]"
        },
        {
            "source": { "id": null, "name": "Daily Beast" },
            "author": "AJ McDougall",
            "title": "Djokovic's Aussie Court Hearing Hit With Technical Difficulties, Zoom Bomber - The Daily Beast",
            "description": "“I regret to inform you that the feed has died again,” a journalist covering the hearing wrote.",
            "url": "https://www.thedailybeast.com/novak-djokovics-court-hearing-over-covid-19-vaccination-visa-plagued-by-technical-difficulties",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2130,w_3786,x_0,y_212/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1641780860/GettyImages-1283059328_ssu4bo",
            "publishedAt": "2022-01-10T03:06:38Z",
            "content": "A hearing over Novak Djokovics legal challenge to the Australian government has been marred by the livestream breaking down several times and an unknown person who, seemingly by accident, joined the … [+807 chars]"
        },
        {
            "source": { "id": null, "name": "New York Times" },
            "author": "Luke Broadwater",
            "title": "Jim Jordan Refuses to Cooperate With Jan. 6 Panel - The New York Times",
            "description": "The Republican congressman from Ohio, a close ally of former President Donald Trump’s, denounced the House investigation of the Capitol riot as one of the Democrats’ “partisan witch hunts.”",
            "url": "https://www.nytimes.com/2022/01/09/us/jim-jordan-jan-6-panel.html",
            "urlToImage": "https://static01.nyt.com/images/2022/01/09/multimedia/09dc-jordan-photo/09dc-jordan-photo-facebookJumbo.jpg",
            "publishedAt": "2022-01-10T02:10:33Z",
            "content": "In Mr. Jordans letter on Sunday, he argued he had little relevant information to share with the committee and that its members should be investigating security failures at the Capitol instead of seek… [+1541 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello i am a constructor from News Coponent");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c26dc6dd6f754cbeac24769937a3d102";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })

    }

    render() {
        console.log("render");
        return (

            <div className='container my-3 ' >
                <h2>NewsMonkey Top Headline</h2>
                <div className="row ">
                    {this.state.articles.map((element) => {
                        console.log(element);
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} NewsUrl={element.url} imageUrl={element.urlToImage} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
