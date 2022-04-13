const fetch = require('node-fetch');

async function get_top_zhihu(id){
    const url = `https://www.zhihu.com/api/v4/search/top_search`;
    const response = await fetch(url);
    // const col = await response.json();
    // return col;
    // 上面两行的缩写
    return await response.json();

    
}
get_top_zhihu().then(col=>{
    console.log(col.top_search.words[0]);
    console.log(col.top_search.words[1]);
    console.log(col.top_search.words[2]);
    console.log(col.top_search.words[3]);

})