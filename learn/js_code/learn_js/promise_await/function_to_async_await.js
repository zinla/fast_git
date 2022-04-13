const fetch = require('node-fetch');

const get_top_zhihu =async (id)=>{
    const url = `https://www.zhihu.com/api/v4/search/top_search`;
    const response = await fetch(url);
    // const col = await response.json();
    // return col;
    // 上面两行的缩写
    return await response.json();

    
}
class APIClient {
    
}
(async ()=>{
    const col = await get_top_zhihu();
    console.log(col.top_search.words[0]);
    console.log(col.top_search.words[1]);
    console.log(col.top_search.words[2]);
    console.log(col.top_search.words[3]);


})();
