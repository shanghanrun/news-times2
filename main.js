// const API_KEY = `724a32d25d164af99927618bc2cc1b7e`;

let news = [];
const getLatestNews = async () => {
    // const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    let url = `https://chic-nasturtium-fd9a30.netlify.app/top-headlines`
    //new URL : url 인스턴스를 새로만든다
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
} 

getLatestNews();