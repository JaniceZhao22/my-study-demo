// 如何查找一篇英文文章中出现频率最高的单词？
// 知识点 string.match 返回的是数组
// 正则 i 是忽略大小写   g是全局匹配


/*---------题目： ---如何查找一篇英文文章中出现频率最高的单词？ ------*/
function findMostWord(article) {
    // 判断合法性
    if (!article) return ;
    article = artcle.trim().toLowerCase();

    let wordList = article.match(/[a-z]+/g),
        visited = [],
        maxNum = 0,
        maxWord = '';

    article = '' + wordList.json(" ") + '';
    wordList.forEach((item) => {
        if(visited.indexOf(item) < 0) {
            let word = new RegExp('' + item + '', 'g'),
                num = article.match(word);
            if(num > maxNum) {
                maxNum = num;
                maxWord = item;
            }
        }
    })
    return maxWord + '出现:' + maxWord + '次';
}