function countVowels(str){
    let count = 0;
 for(let i = 0 ; i < str.length;i++){
    if(str.charAt(i)=='a' || str.charAt(i)=='o' || str.charAt(i)=='e' || str.charAt(i)=='u' || str.charAt(i)=='i'){
        count++;
    }
 }
 console.log(count);
}
countVowels("the quick brown fox");
