import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, mode} = this.props;
        return (
            <div>
                <div className="card" >
                    <img className="card-img-top" src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} alt="..."/>
                    <div className="card-body" style={{backgroundColor: mode==='dark'?'#232121':'white', color: mode==='dark'?'white':'black'}}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary" rel='noreferrer'>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem

