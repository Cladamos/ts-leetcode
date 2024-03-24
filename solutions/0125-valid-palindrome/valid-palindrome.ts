export function isPalindrome(s: string): boolean {
    let code = 0
    let output = ""
  for (let i = 0; i < s.length; i++) {
    code = s.charCodeAt(i);
    
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
        
        output += s[i].toLowerCase()
    }
  }
  for (let i = 0; i < output.length; i++){
    if (output.length - i - 1 === i){
        return true
    }
    if (output[i] !== output[output.length - i - 1]){
        return false
    }
  }
  return true

};