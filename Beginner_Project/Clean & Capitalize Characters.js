/*
⚠️ Function Name Must be onlyCharacter()

Rafi is an aspiring Ethical Hacker. 💻 Every day he works with different types of encrypted information. In his latest mission, he found some secret messages, but those messages contain lots of spaces, lowercase letters, uppercase letters, and all sorts of random gaps. As a result, the messages are very difficult to read.

Rafi wants to build a tool that can format any string so that it keeps only characters (letters), removes everything else, and converts all characters into uppercase letters.

👉 Your task is to create a function named onlyCharacter() that will take any string as input, extract only the characters, and return them in their uppercase form.
*/



function onlyCharacter(text) {
    if (typeof text !== "string") {
        return "Invalid";
    }
   const noSpaces = text.replace(/\s+/g, "");

    return noSpaces.toUpperCase();
}

console.log(onlyCharacter("Cy   bar- At  tac k  "));
