function isAnagram(str1, str2) {
    const cleanedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  console.log(isAnagram("abcd", "dabc")); // true
  console.log(isAnagram("hello", "world")); // false
  