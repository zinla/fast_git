const url = `https://www.zhihu.com/api/v4/search/top_search`;

fetch(url)
    .then((result)=>result.json())
    .then((result)=>{
        console.log(result.top_search.words[0]);
        console.log(result.top_search.words[1]);
        console.log(result.top_search.words[4]);
        console.log(result.top_search.words[5]);
    })
