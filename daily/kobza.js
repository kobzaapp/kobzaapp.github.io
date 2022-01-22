/*
TODO:
- Tutorial show on first
- Button show tutorial
- Share
*/

if (!window.VALID_WORDS) {
  window.VALID_WORDS = ['срака']
  console.error('Word list have not loaded properly')
} else {
  console.log('Legal words are here, mate')
}

const LetterState = {
  standard: 'Standard',
  disabled: 'Disabled',
  green: 'Green',
  yellow: 'Yellow'
};

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let keyboard='йцукенгшщзхфіївапролджєячсмитьбю'

/*
  Якщо ви читаєте це - привіт!
  Якщо ви вмієте програмувати - то вам не стане зусиль зрозуміти,
  що код нижче відповідає за слова, що загадані наперед. Але ми
  просимо не поширювати ваші знахідки, щоб не псувати іншим людям
  гру. Дякуємо!
*/
let Wotd = {
  start_date: Date(2022,1,20),
  wotd_array: [
    'c1717946', '9c6c2a5e', '27b0be2', '33928f9e', '1ddc969e',
    '952f1c8a', '6dcf5cee', '7a64a3e2', '5dc4c95e', '86a28906',
    '9c82178', '7d2fa0b4', 'a4221bf8', '2c729bea', '465c7322',
    '4b8f9f46', '55628b2e', 'e6ca8e4', 'b1319504', '5a5e8de8',
    '29d9e0a0', '69e53126', '43d3651e', '15c49ef0', '8e46dd1e',
    '4ef9217a', '234f0548', '27821bca', '1a048f36', '3c729b22',
    'ce0fa32a', '9a4f4ef2', 'd9323ef8', '10cf2c87', '83322848',
    'e1d09eca', 'cbf1de78', '9282896e', 'bebb8bd6', '626c1be2',
    '727fe16e', 'b653216e', 'aa2e7f36', 'b8af8de8', '652e7f36',
    'd462496e', 'd17110f8', 'a352e6dc', 'ae11925e', '50e3645e',
    '3a0fe324', '88737d3a', '74a4a08c', '553de78', 'c4ce7cf9',
    'de5c207a', '37307f36'
  ],
  decode(wotd) {
    let num = Number.parseInt(wotd, 16)
    let result = []
    let magic = num & 1
    num = num >> 1
    // let date = Wotd.start_date.addDays(ddelta)
    for (let i=0; i<5; i++) {
      key = num & 0b11111
      result.push(keyboard[key])
      num = num >> 5
    }
    let ddelta = num & 0b111111
    st = result.reverse().join('')
    if (magic) result = st.replace('г','ґ')
    return [st, ddelta]
  },
  getDateDiff: function() {
    let start_date = new Date(2022,0,22)
    let today = new Date()
    return Math.floor((new Date(today.getFullYear(), today.getMonth(), today.getDate()) - new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate()) ) /(1000 * 60 * 60 * 24));
  },
  word: 'кобза'
}
function setWotd() {
  let dateDiff = Wotd.getDateDiff()
  for (let i=0; i<Wotd.wotd_array.length; i++) {
    let wotd = Wotd.wotd_array[i]
    let decode = Wotd.decode(wotd)
    if (decode[1] == dateDiff) {
      Wotd.word = decode[0]
      break
    }
  }
}
setWotd()


class Letter {
  constructor(char) {
    this.char = char
    this.state = LetterState.standard
  }
}

class EmptyLetter {
  constructor() {
    this.char = ''
    this.state = LetterState.standard
  }
}

const GUESS_LENGTH = 5

class Guess {
  constructor(letters = [], number = 0) {
    this.letters = letters
    this.number = number
  }

  addLetter(char) {
    if (this.letters.length >= GUESS_LENGTH) {
      // Нічого не робимо, букви не додаються
    } else {
      let letter = new Letter(char)
      this.letters.push(letter)
    }
  }

  compare(root) {
    if (this.letters.length != GUESS_LENGTH) {
      console.error('Incorrect button press')
      return false
    }
    if (window.VALID_WORDS.indexOf(this.letters.map(l => l.char).join('')) < 0) {
      console.error('Incorrect word')
      alert('Тупе слово')
      return false
    }

    let rightLetters = Wotd.word.split('')
    let otherLetters = []
    let greenCount = 0
    for (let i=0; i<GUESS_LENGTH; i++) {
      let char = rightLetters[i]
      let letter = this.letters[i]
      if (letter.char == char) {
        greenCount++
        root.$emit('keystate', char, LetterState.green)
        letter.state = LetterState.green
      } else {
        otherLetters.push(char)
      }
    }
    if (greenCount == GUESS_LENGTH) {
      this.success(root)
      return false
    }
    for (let i=0; i<GUESS_LENGTH; i++) {
      let letter = this.letters[i]
      if (letter.state == LetterState.green) {
        continue
      }
      if (otherLetters.indexOf(letter.char) >= 0) {
        root.$emit('keystate', letter.char, LetterState.yellow)
        letter.state = LetterState.yellow
      } else {
        root.$emit('keystate', letter.char, LetterState.disabled)
        letter.state = LetterState.disabled
      }
    }

    return true
  }

  backspace() {
    this.letters.pop()
  }

  success(root) {
    root.$emit('success')
  }

  getLetters() {
    let result = []
    for (let i=0; i<GUESS_LENGTH; i++) {
      if (i<this.letters.length) {
        result.push(this.letters[i])
      } else {
        result.push(new EmptyLetter())
      }
    }
    return result
  }
}

Vue.component('letter', {
  props: ['letter'],
  computed: {
    letterClass: function() {
      let result = ""
      switch(this.letter.state) {
        case LetterState.standard: result += 'bg-kolor'; break;
        case LetterState.disabled: result += 'bg-kdisabled'; break;
        case LetterState.yellow: result += 'bg-kellow'; break;
        case LetterState.green: result += 'bg-kreen'; break;
      }
      if (this.letter.char.length > 0) {
        if (this.letter.state == LetterState.standard) {
          result += " ba b--white"
        }
      } else {
        result += " ba b--silver"
      }
      return result
    }
  },
  template: `
  <div :class="letterClass" class='letter h-100 fl f2 mh1 tc ttu white pv1 br2 fw7'>
    <div class="dib">{{letter.char}}</div>
  </div>
  `
})

Vue.component('guess', {
  props: ['guess'],
  template: `
  <div class='guess w-100 h3 center pa2 flex justify-center'>
    <letter v-for="letter in guess.getLetters()" v-bind:letter="letter"></letter>
  </div>
  `
})

const FIELD_TEMPLATE = `
  <div class="pa3" id="field">
    <guess v-for="guess in guesses" v-bind:guess="guess"></guess>
  </div>
`

Vue.component('sharebutton', {
  computed: {
    buttonClass: function() {
      if (this.guessed) {
        return ''
      } else {
        return 'dn'
      }
    }
  },
  data: function() {
    return {
      guessed: false
    }
  },
  methods: {
    share: function() {
      this.$root.$emit('share')
    }
  },
  mounted: function() {
    this.$root.$on('success', function() {
      console.log('вгадалось')
      this.guessed = true
    }.bind(this))
  },
  template: `
  <div class="h2 w4 f4 tc ba b--white br2 pv1 white center ma3" :class="buttonClass" v-on:click="share">
    поділитись
  </div>
  `
})

State = {
  loadGuesses: function() {
    // build storage key from date
    let poolKey = this.buildPoolKey()

    // fetch saved guesses by date if any
    guesses = this.loadCurrentPool(poolKey)

    return guesses
  },

  buildPoolKey: function() {
    let now = new Date()
    let year = now.getUTCFullYear()
    let month = now.getUTCMonth()
    let day = now.getUTCDate()
    let key = "" + day + '/' + month + '/' + year

    return key
  },

  loadCurrentPool: function(poolKey) {
    let savedPool = localStorage.getItem(poolKey)
    let guesses = []

    if(savedPool) {
      JSON.parse(savedPool).guesses.forEach(function(el){
        let letters = []
        el.letters.forEach(function(letter){
          letters.push(new Letter(letter))
        })

        guesses.push(new Guess(el.letters, el.number))
      })
    }

    // backfill pool with empty guesses
    while(guesses.length < 6) {
      guesses.push(new Guess())
    }

    return guesses
  }
}

Vue.component('field', {
  data: function() {
    let guesses = State.loadGuesses()
    let currentGuess = 0
    while(guesses[currentGuess].letters.length > 0) {
      guesses[currentGuess].compare(this.$root)
      currentGuess++
    }
    return {
      guesses: guesses,
      currentGuess: currentGuess
    }
  },
  methods: {
    addChar: function(char) {
      this.guesses[this.currentGuess].addLetter(char)
    },
    forward: function() {
      let guess = this.guesses[this.currentGuess]
      if (guess.compare(this.$root)) {
        this.guesses[this.currentGuess] = guess
        localStorage.setItem(State.buildPoolKey(), JSON.stringify({guesses: this.guesses}))
        this.currentGuess++
      }
    },
    back: function() {
      let guess = this.guesses[this.currentGuess]
      guess.backspace()
    },

    share: function() {
      alert('share pressed')
    }
  },
  mounted: function() {
    this.$root.$on('pressed', function(char) {
      this.addChar(char)
    }.bind(this))
    this.$root.$on('forward', function() {
      this.forward()
    }.bind(this))
    this.$root.$on('back', function() {
      this.back()
    }.bind(this))
    this.$root.$on('share', function() {
      this.share()
    }.bind(this))
  },
  template: FIELD_TEMPLATE
})

Vue.component('keyletter', {
  props: ['letter'],
  computed: {
    letterClass: function() {
      switch(this.letter.state) {
        case LetterState.standard: return ' bg-kstandard'
        case LetterState.disabled: return ' bg-kdisabled'
        case LetterState.yellow: return ' bg-kellow'
        case LetterState.green: return ' bg-kreen'
      }
    }
  },
  methods: {
    press: function() {
      this.$root.$emit('pressed', this.letter.char)
    }
  },
  template: `
  <div class='buttonholder dtc h-100' v-on:click="press">
    <div class='white keyletter f3 tc br3 ttu pv3 v-mid' :class="letterClass" >{{letter.char}}</div>
  </div>
  `
})

Vue.component('keyboard', {
  methods: {
    back: function() {
      this.$root.$emit('back')
    },
    forward: function() {
      this.$root.$emit('forward')
    },
    button: function(char) {
      console.log(char)
    },
    updateLetter(letter, incomingState) {
      if (letter.state == LetterState.green) {
        return
      } else {
        if (incomingState == LetterState.disabled && letter.state != LetterState.standard) {
          return
        }
        letter.state = incomingState
      }
    }
  },
  mounted: function() {
    this.$root.$on('keystate', function(char, state) {
      this.updateLetter(this.keys[char], state)
    }.bind(this))
  },
  data: function() {
    const KEYS = [["й", "ц", "у", "к", "е", "н", "г", "ґ", "ш", "щ", "з", "х"],
                  ["ф", "і", "ї", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
                  ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"]]
    let keys = {}
    for (let i=0; i<KEYS.length; i++) {
      let row = KEYS[i]
      for (let j=0; j<row.length; j++) {
        let char = row[j]
        keys[char] = new Letter(char)
      }
    }
    let guesses = State.loadGuesses()
    for (let i=0; i<guesses.length; i++) {
      let guess = guesses[i]
      for (let j=0; j<guess.letters.length; j++) {
        this.updateLetter(keys[guess.letters[j].char], guess.letters[j].state)
      }
    }
    return {
      char: '',
      keys: keys,
      KEYS: KEYS
    }
  },
  template: `
  <div class="" id="keyboard">
    <div class="w-100 center dt dt--fixed pv1">
      <keyletter v-for="key in KEYS[0]" v-bind:letter="keys[key]"></keyletter>
    </div>
    <div class="w-100 center dt dt--fixed pv1">
      <keyletter v-for="key in KEYS[1]" v-bind:letter="keys[key]"></keyletter>
    </div>
    <div class="w-100 center dt dt--fixed pv1">
      <div class='dtc mh1 f1 buttonholder' v-on:click="back">
        <div class='white keyletter f3 tc br3 ttu pv3 v-mid bg-kstandard'><</div>
      </div>
      <keyletter v-for="key in KEYS[2]" v-bind:letter="keys[key]"></keyletter>
      <div class='dtc mh1 f1 buttonholder' v-on:click="forward">
        <div class='white keyletter f3 tc br3 ttu pv3 v-mid bg-kstandard'>></div>
      </div>
    </div>
  </div>
  `
})


var game = new Vue({
  el: '#game',
  template: `
  <div>
    <field></field>
    <sharebutton></sharebutton>
    <keyboard></keyboard>
  </div>
  `
})