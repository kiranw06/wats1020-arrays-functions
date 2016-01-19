
// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps: 
// 1. Use the split() function to split the String into an Array               
// 2. Use the length attribute to find the number of words in the Array        
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.



var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

var shortText = truncateWords(originalText, wordLimit);

console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);



//Create an function that excludes words in wrttient statement called: truncateWords

function truncateWords(longText, numWords) {
    //Split the string into individual words 
    "use strict";
    var strTextArray = originalText.split(" ");
    console.log("1. Use the split() function to split the String into an Array: " + strTextArray);
    //find the length of the string
    var wordCount = strTextArray.length;
    console.log("2. Use the length attribute to find the number of words in the Array: " + strTextArray.length);
    //decide where to truncate the text
    var truncateText = strTextArray.splice(0,numWords);
    var previewText = truncateText.join(" ");
    console.log("3. Determine how many words should be removed from the String: " + "7");
    console.log("4. Remove those words from the Array: " + previewText);
    //print results with elipses at the end of text 
    console.log("5. Add an additional String item to the Array to put an ellipses in: " + previewText + " ...");
    //return the original string, truncated string, and word count 
    return previewText + " ..." + " " + "Original word count: " + wordCount;
}
 
console.log("Enter a number value to customize the numWords argument: " + truncateWords(originalText,5));
 






  

