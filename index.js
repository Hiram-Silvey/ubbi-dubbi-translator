let vowels = ['a', 'e', 'i', 'o', 'u'],
    sometimesVowels = ['y']

function toUbbiDubbi(text) {
    output = ''
    inserted = false
    first = true
    for (i = 0; i < text.length; i++) {
        char = text.charAt(i)
        lowerChar = char.toLowerCase()
        if (inserted == true) {
            if (!vowels.includes(lowerChar) && !(sometimesVowels.includes(lowerChar) && first != true)) {
                inserted = false
            }
        } else {
            if (vowels.includes(lowerChar) || (sometimesVowels.includes(lowerChar) && first != true)) {
                if (char != lowerChar) {
                    output += 'Ub'
                    char = lowerChar
                } else {
                    output += 'ub'
                }
                inserted = true
            }
        }
        if (lowerChar.match(/[a-z]/i)) {
            first = false
        } else {
            first = true
        }
        output += char
    }
    return output
}
