function firstLetter(str)
{
  let words = str.split(" ");
  let newStr = [];
  for(let i = 0; i < words.length; i++){
      newStr.push(words[i].charAt(0).toUpperCase()+words[i].slice(1));
  }
  console.log( newStr.join(" "));
}
firstLetter("the quick brown fox");
