function normalSentence(sentence) {
    sentence = sentence.trim();
    let words = sentence.split(" ");
    let normalWord = [];
    for (let word of words) {
        if (word.length > 0) {
            let firstWord = word[0].toUpperCase();
            let nextWord = word.slice(1).toLowerCase();
            let normalSentence = firstWord + nextWord;
            normalWord.push(normalSentence);
        }
    }
    let normalSentence = normalWord.join(" ");
    return normalSentence;
}
console.log(normalSentence(" đỀ qUIZZi đƯỢC tHẤp ĐiỂm QuÁ hUhU "));
console.log(normalSentence("hÔm qUa ôN bÀI ĐẾN hƠN MƯỜI hAI gIỜ đÊM MÀ khÔNG ăn thUA rỒI"));