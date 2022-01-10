import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Chloe Melas and Sandra Gonzalez, CNN",
            "title": "Golden Globe winners list 2022 - CNN",
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
        },
        {
            "source": { "id": null, "name": "ESPN" },
            "author": "Nick Wagoner",
            "title": "Jimmy Garoppolo leads San Francisco 49ers' comeback from 17 down to stun Los Angeles Rams in OT, clinch NFC playoff spot - ESPN",
            "description": "Led by Jimmy Garoppolo, the 49ers scratched and clawed their way back from a 17-point deficit for a dramatic overtime victory against the rival Rams to clinch their ticket to the postseason.",
            "url": "https://www.espn.com/nfl/story/_/id/33030500/jimmy-garoppolo-leads-san-francisco-49ers-comeback-17-stun-los-angeles-rams-ot-clinch-nfc-playoff-spot",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0110%2Fr959601_1296x729_16%2D9.jpg",
            "publishedAt": "2022-01-10T01:24:49Z",
            "content": "INGLEWOOD, Calif. -- It was a fitting way for the San Francisco 49ers to punch their ticket to the postseason.\r\nLeft for dead at halftime much like they were at the halfway point of their season, the… [+6187 chars]"
        },
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Eric Levenson, Alaa Elassar, Laura Studley and Elizabeth Joseph, CNN",
            "title": "Bronx apartment building fire leaves 19 people dead, including 9 children - CNN",
            "description": "A major fire in a residential apartment building in the Bronx in New York City on Sunday left 19 people dead, including 9 children, in what Mayor Eric Adams described as one of the worst fires the city has experienced in modern times.",
            "url": "https://www.cnn.com/2022/01/09/us/bronx-fire-injuries/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220109130424-01-bronx-fire-0109-super-tease.jpg",
            "publishedAt": "2022-01-10T01:24:00Z",
            "content": "(CNN)A major fire in a residential apartment building in the Bronx in New York City on Sunday left 19 people dead, including 9 children, in what Mayor Eric Adams described as one of the worst fires t… [+5155 chars]"
        },
        {
            "source": { "id": null, "name": "Variety" },
            "author": "J. Kim Murphy",
            "title": "Bob Saget, ‘Full House’ Star, Dies at 65 - Variety",
            "description": "Bob Saget, a stand-up comedian and actor beloved for his role as Danny Tanner on the 1990s sitcom “Full House,” died Sunday at the Ritz-Carlton hotel in Orlando, Fla., police confirmed to Variety. He was 65. Shortly after 4 p.m., police officers responded to …",
            "url": "https://variety.com/2022/tv/news/bob-saget-dead-full-house-star-afv-host-1235149876/",
            "urlToImage": "https://variety.com/wp-content/uploads/2022/01/Bob-Saget-obit.jpg?w=1000",
            "publishedAt": "2022-01-10T00:49:00Z",
            "content": "Bob Saget, a stand-up comedian and actor beloved for his role as Danny Tanner on the 1990s sitcom “Full House,” died Sunday at the Ritz-Carlton hotel in Orlando, Fla., police confirmed to Variety. He… [+3865 chars]"
        },
        {
            "source": { "id": null, "name": "WGN TV Chicago" },
            "author": "Jenna Barnes",
            "title": "Mother, siblings charged in death of missing North Chicago 6-year-old - WGN TV Chicago",
            "description": "GARY, Ind. —  On Sunday, a memorial of stuffed animals and angels lined the window ledge outside the building where 6-year-old Damari Perry lived with his mom and six siblings. Prosecutors say it was inside that home where the young boy’s mother and two of th…",
            "url": "https://wgntv.com/crime/mother-siblings-charged-in-death-of-missing-north-chicago-6-year-old/",
            "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2022/01/7028DCFE18677841850E83D285DFA0C9.jpg?w=1280",
            "publishedAt": "2022-01-10T00:06:31Z",
            "content": "GARY, Ind.   On Sunday, a memorial of stuffed animals and angels lined the window ledge outside the building where 6-year-old Damari Perry lived with his mom and six siblings.\r\nProsecutors say it was… [+1932 chars]"
        },
        {
            "source": { "id": null, "name": "YouTube" },
            "author": null,
            "title": "U.S. and Russia to engage in diplomatic talks over Ukraine - CBS News",
            "description": "A top Russian official says Moscow will not be pressured into making concessions to the U.S. during diplomatic talks about Ukraine. CBS News State Department...",
            "url": "https://www.youtube.com/watch?v=l6lrZ92UK5I",
            "urlToImage": "https://i.ytimg.com/vi/l6lrZ92UK5I/hqdefault.jpg",
            "publishedAt": "2022-01-09T23:44:49Z",
            "content": null
        },
        {
            "source": { "id": null, "name": "CoinDesk" },
            "author": "Muyao Shen, Damanick Dantes",
            "title": "First Mover Asia: Bitcoin, Altcoins Rebound Amid Light Trading - CoinDesk",
            "description": "Bitcoin topped $42,500 on Sunday after reaching its lowest mark since late September the day before; ether reaches over $3,200.",
            "url": "https://www.coindesk.com/markets/2022/01/09/first-mover-asia-bitcoin-altcoins-rebound-amid-light-trading/",
            "urlToImage": "https://www.coindesk.com/resizer/maxW9wAGf4I2UCsN8jkNQH1fzXA=/1200x628/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EYAH7UX5RJCPXOVO3SWNRU4GMY.jpg",
            "publishedAt": "2022-01-09T23:33:00Z",
            "content": "Bitcoin pushed past the $42,000 level over the weekend, after last weeks broad market bloodbath, which sent the No. 1 cryptocurrency by market capitalization spiraling toward $40,000 from about $48,0… [+159 chars]"
        },
        {
            "source": { "id": "the-hill", "name": "The Hill" },
            "author": "Joseph Choi",
            "title": "Ten dead after cliff collapses on boaters in Brazil | TheHill - The Hill",
            "description": "At least 10 people have been reported dead after part of a cliff fell on a group of tourist boats...",
            "url": "https://thehill.com/policy/international/588940-ten-dead-after-cliff-collapses-on-boaters-in-brazil",
            "urlToImage": "https://thehill.com/sites/default/files/article_images/brazil_lake_furnas_010922_ap_igor_do_vale.jpeg",
            "publishedAt": "2022-01-09T23:18:28Z",
            "content": "At least 10 people have been reported dead after part of a cliff fell on a group of tourist boats in Brazil on Saturday.\r\nThe fire department of the Brazilian state of Minas Gerais reported that the … [+1222 chars]"
        },
        {
            "source": { "id": "bloomberg", "name": "Bloomberg" },
            "author": null,
            "title": "Alexandria Ocasio-Cortez Tests Positive for Covid-19 - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=d74d2436-71c0-11ec-96d8-67486a767951&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wMS0wOS9hbGV4YW5kcmlhLW9jYXNpby1jb3J0ZXotdGVzdHMtcG9zaXRpdmUtZm9yLWNvdmlkLW9mZmljZS1zYXlz",
            "urlToImage": null,
            "publishedAt": "2022-01-09T23:17:04Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": { "id": "usa-today", "name": "USA Today" },
            "author": "Christine Brennan, USA TODAY",
            "title": "Opinion: Nathan Chen wins at U.S. national figure skating championship, but COVID does too - USA TODAY",
            "description": "Nathan Chen, the American superstar who will be a gold-medal favorite at the Beijing Winter Olympics, came away impressed by teen Ilia Malinin.",
            "url": "https://www.usatoday.com/story/sports/christinebrennan/2022/01/09/nathan-chen-wins-us-figure-skating-title-teen-ilia-malinin/9152276002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/01/09/USAT/7767b33c-5343-4088-a9b3-b41db202df90-USP_Figure_Skating__2022_Toyota_U.S._Figure_Skatin.jpg?auto=webp&crop=5177,2912,x0,y263&format=pjpg&width=1200",
            "publishedAt": "2022-01-09T22:41:42Z",
            "content": "NASHVILLE, Tenn. — A most unusual U.S. national figure skating championship is over, and the results are crystal clear:\r\nNathan Chen won. Sadly, so did COVID-19.\r\nChen, the 22-year-old American super… [+3713 chars]"
        },
        {
            "source": { "id": "newsweek", "name": "Newsweek" },
            "author": "Jason Lemon",
            "title": "Ex-GOP Counsel Calls Ron Johnson 'Hack of the Highest Order' After Senator Says He'll Run Again - Newsweek",
            "description": "The Wisconsin Republican \"is not someone you can take seriously as a United States senator,\" Sophia Nelson said Sunday.",
            "url": "https://www.newsweek.com/ex-gop-counsel-calls-ron-johnson-hack-highest-order-after-senator-says-hell-run-again-1667282",
            "urlToImage": "https://d.newsweek.com/en/full/1965594/senator-ron-johnson.jpg",
            "publishedAt": "2022-01-09T22:37:40Z",
            "content": "Lawyer Sophia Nelson, who previously served as the GOP counsel for the House Government Reform and Oversight Committee, lit into Senator Ron Johnson, a Wisconsin Republican, on Sunday after he confir… [+3131 chars]"
        },
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "GM recognizes California's authority to set vehicle emissions rules - Reuters",
            "description": "General Motors Co <a href=\"https://www.reuters.com/companies/GM.N\" target=\"_blank\">(GM.N)</a> on Sunday said it had agreed to recognize California’s authority to set vehicle emission standards under the Clean Air Act.",
            "url": "https://www.reuters.com/business/autos-transportation/gm-recognizes-californias-authority-set-vehicle-emissions-rules-2022-01-09/",
            "urlToImage": "https://www.reuters.com/resizer/t8XRcS82avaxlBS6cvJo5oVY8dw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UK6672D4TBMINA72ZLVY5ODHIA.jpg",
            "publishedAt": "2022-01-09T22:19:00Z",
            "content": "WASHINGTON, Jan 9 (Reuters) - General Motors Co (GM.N) on Sunday said it had agreed to recognize Californias authority to set vehicle emission standards under the Clean Air Act.\r\nThe move will make t… [+2729 chars]"
        },
        {
            "source": { "id": "fox-news", "name": "Fox News" },
            "author": "Ryan Gaydos",
            "title": "Bizarre Chargers, Raiders playoff scenario still alive ahead of matchup - Fox News",
            "description": "The Los Angeles Chargers and Las Vegas Raiders will play Sunday night with both teams potentially securing a playoff spot in a wild scenario that emerged in the midst of the Week 18 slate.",
            "url": "https://www.foxnews.com/sports/bizarre-chargers-raiders-playoff-scenario-alive",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Justin-Herbert3.jpg",
            "publishedAt": "2022-01-09T22:17:43Z",
            "content": "The Los Angeles Chargers and Las Vegas Raiders will play Sunday night with both teams potentially securing a playoff spot in a wild scenario that emerged in the midst of the Week 18 slate.\r\nThe Jacks… [+2702 chars]"
        },
        {
            "source": { "id": "engadget", "name": "Engadget" },
            "author": "https://www.engadget.com/about/editors/jon-fingas",
            "title": "Breakthrough could help you 3D print OLED screens at home - Engadget",
            "description": "Scientists have built a fully 3D-printed flexible OLED display that might let you make your own screens..",
            "url": "https://www.engadget.com/full-3d-printed-flexible-oled-display-220930099.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-01/8b3ff7d0-718f-11ec-9a3f-84ee75f2f933",
            "publishedAt": "2022-01-09T22:12:01Z",
            "content": "You might not have to send your devices in (or buy replacement parts) if the display breaks you could just make new screens yourself. University of Minnesota Twin Cities researchers have developed wh… [+1673 chars]"
        },
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "Ex-PM says Kazakh leader must act fast to neutralise Nazarbayev faction - Reuters",
            "description": "Kazakhstan's president must move fast to consolidate his grip  after breaking with his powerful predecessor as the country was racked last week by the deadliest violence in its 30 years of independence from Moscow, a former prime minister said on Sunday.",
            "url": "https://www.reuters.com/world/asia-pacific/ex-pm-says-kazakh-leader-must-act-fast-neutralise-nazarbayev-faction-2022-01-09/",
            "urlToImage": "https://www.reuters.com/resizer/c1eZlNnsDnZvzheq-AXzoMMMg_w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6D5UJUWBDNJPZMI3GON6U4IGLM.jpg",
            "publishedAt": "2022-01-09T21:50:00Z",
            "content": "LONDON, Jan 9 (Reuters) - Kazakhstan's president must move fast to consolidate his grip after breaking with his powerful predecessor as the country was racked last week by the deadliest violence in i… [+2793 chars]"
        },
        {
            "source": { "id": "newsweek", "name": "Newsweek" },
            "author": "Jason Lemon",
            "title": "Fox News Hosts Confronts CDC Director Over Sotomayor's Claim About Children With COVID - Newsweek",
            "description": "Supreme Court Justice Sonia Sotomayor on Friday dramatically inflated the number of children severely ill with COVID-19.",
            "url": "https://www.newsweek.com/fox-news-hosts-confronts-cdc-director-over-sotomayors-claim-about-children-covid-1667275",
            "urlToImage": "https://d.newsweek.com/en/full/1965587/fox-news-bret-baier-dr-walensky.png",
            "publishedAt": "2022-01-09T21:40:47Z",
            "content": "Fox News anchor Bret Baier confronted Centers for Disease Control and Prevention director Rochelle Walensky on Sunday, urging her to counter inaccurate claims about children hospitalized with COVID-1… [+3842 chars]"
        },
        {
            "source": { "id": null, "name": "New York Times" },
            "author": "Apoorva Mandavilli",
            "title": "Starting later this week, some at-risk Americans become eligible for a 4th Covid shot. - The New York Times",
            "description": "A change in federal recommendations allows moderately or severely immunocompromised people to receive their boosters five months after their third shot, which was a part of the primary immunization.",
            "url": "https://www.nytimes.com/2022/01/09/health/immunocompromised-fourth-dose-booster.html",
            "urlToImage": "https://static01.nyt.com/images/2022/01/09/multimedia/09virus-briefing-immuncompromised4thdose-01/09virus-briefing-immuncompromised4thdose-01-facebookJumbo.jpg",
            "publishedAt": "2022-01-09T20:48:08Z",
            "content": "For immunocompromised people who received a single shot of the coronavirus vaccine made by Johnson &amp; Johnson, the C.D.C. does not recommend additional primary doses, but advises that they get a b… [+1382 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello i am a constructor from News Coponent");
        this.state = {
            articles:this.articles,
            loading:false
        }
    }

    render() {
        return (
            <div className='container my-3 ' >
                <h2>NewsMonkey Top Headline</h2>
                <div className="row ">
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my description" imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/211202190134-west-side-story-super-tease.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my description" imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/211202190134-west-side-story-super-tease.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my description" imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/211202190134-west-side-story-super-tease.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
