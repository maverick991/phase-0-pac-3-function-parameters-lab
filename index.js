function introduction(name) {
    return (`Hi, my name is ${name}.`);
}
introduction(`Aki`)

function sayHello(firstName) {
    console.log(`Hello, ${firstName}!`);
}
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguage(Aki, Ember)

function sayHelloIntroductionWithLanguage(firstName, language) {
    console.log(`Hi, my name is {name} and I am learning to program in {language}.`)
}
function introductionWithLanguageOptional(name, language = `JavaScript`) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguageOptional(Gracie, language)
   
function sayHelloIntroductionWithLanguageOptional(name, language) {
    console.log(`Hi, my name is {name} and I am learning to program in ${language}.`) 
}