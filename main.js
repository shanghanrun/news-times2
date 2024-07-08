// const API_KEY = `724a32d25d164af99927618bc2cc1b7e`;

let category = ""; // 리펙토링
let keyword = ""; // 리펙토링
let newsList = [];
let totalResult = 0;
let page = 2;
let movePage = "";
const pageSize = 10;
const groupSize = 5;
let totalPageC;

let news = [];
const getLatestNews = async () => {
    // const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    // let url = `https://beautiful-selkie-5be2a6.netlify.app/top-headlines`
    
    const url = new URL(
        `https://third-js-project-sw-copy.netlify.app/top-headlines?country=kr&pageSize=${pageSize}&page=${page}${category}${keyword}`
    ); // 리펙토링

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Upgrade' : 'h2c',
        'Connection': 'Upgrade'
      }
    });
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
} 

getLatestNews();