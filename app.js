function palindrome(str) {
    str = str.toLowerCase();

    var regex = /[a-zA-Z0-9]/gi;

    var lettersOnly= str.match(regex)

    // console.log(lettersOnly)

    var reversedArray =[...lettersOnly].reverse();

    console.log(lettersOnly,reversedArray)

    for (var i = 0; i < lettersOnly.length; i++){

      if (lettersOnly[i] == reversedArray[i]){

      } else {

        return false

      }

    }

    return true

    }

    palindrome("Hello World");

    