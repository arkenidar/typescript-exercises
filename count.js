export default function count_wovels(phrase) {
    phrase = phrase.toLowerCase();
    var counters = {
        "a": 0, "e": 0, "i": 0, "o": 0, "u": 0
    };
    for (let letter of phrase) {
        if (letter in counters)
            counters[letter]++;
    }
    return counters;
}
