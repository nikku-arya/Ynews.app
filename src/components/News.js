import React, { Component } from 'react'
import Newsitem from './Newsitem'
import  PropTypes  from 'prop-types';

export class News extends Component {
  static defaultProps = {
     country: 'in',
     pagesize: 8,
     category: 'general'
  }

  static propTypes = {
     country: PropTypes.string,
     pagesize: PropTypes.number,
     category: PropTypes.string
  }
   

  constructor(){
    super();
    this.state={
      articles :  [],
      page: 1,
    }
  }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93538415122a4c6483d9196e684fc62a&page=1&pagesize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults});
  }
  
  handlenext =async ()=>{
    if(this.state.page +1 > Math.ceil(this.state.totalResults /this.props.pagesize)){

    }
    else
    {let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93538415122a4c6483d9196e684fc62a&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles,
      page: this.state.page +1});}
  }

  handleprev =async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93538415122a4c6483d9196e684fc62a&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles,
      page: this.state.page -1});
    
  }

  render() {
    let {mode} = this.props;
    return (
      <div className='container my-3'>
          <h2 style={{color: mode==='dark'?'white':'black', margin: '40px 0px'}} className='text-center'>YNews - Top Headlines</h2>
          <div className="row my-3">
              {
                this.state.articles.map((element) => {
                return <div className="col-md-4 " key={element.url} >
                <Newsitem mode={mode} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>})
              }
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handlenext} disabled={this.state.page +1 > Math.ceil(this.state.totalResults /this.props.pagesize)}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News