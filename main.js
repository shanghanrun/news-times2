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
        `https://third-js-project-sw-copy.netlify.app/top-headlines?country=us&pageSize=${pageSize}&page=${page}${category}${keyword}`
    ); 

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






function today(){
    const now = new Date();
    const year = now.getFullYear(); 
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0'); 

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}


function initializeSettings(){
    page = 1
    pageSize = 10
    groupSize =5
    group =[]
    groups =[]
    groupIndex =0;
    currentIndex = 0;
}

function imgError(image){
    image.onerror = null; // 이미지 에러 핸들러를 중복호출하지 않도록 이벤트 리스너를 제거한다.
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU";
}

function toggleInput(){
    const searchInput = document.querySelector('#search-input')
    const searchButton = document.querySelector('#search')

    searchInput.disabled = !searchInput.disabled;
    searchButton.disabled = !searchButton.disabled;
    console.log('disabled :', searchInput.disabled);
}
