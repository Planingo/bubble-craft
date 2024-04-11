export const toCapitalized = (sentence) => {
    const word = sentence.split(" ")[0]
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter?.toUpperCase()
    const remainingLetters = word?.slice(1)
    const capitalizedWord = firstLetterCap + remainingLetters
    return sentence.replace(word, capitalizedWord)
}