function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/javascript/g, 'typescript')
} 

console.log(replaceJavaScriptWithTypeScript('I love JavaScript and JavaScript is awesome!'))