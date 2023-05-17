function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  console.log(isPalindrome("dad")); // true
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("hello")); // false
  