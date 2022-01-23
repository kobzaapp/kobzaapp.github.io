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
  constructor(char, state) {
    this.char = char
    if (state) {
      this.state = state
    } else {
      this.state = LetterState.standard
    }
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
  <div class="letterbuttonholder dtc">
    <div :class="letterClass" class='letter h-100 f2 tc ttu white br2 fw7'>
      <div class="dib v-mid letterchar">{{letter.char}}</div>
    </div>
  </div>
  `
})

Vue.component('guess', {
  props: ['guess'],
  template: `
  <div class='guess center dt-row'>
    <letter v-for="letter in guess.getLetters()" v-bind:letter="letter"></letter>
  </div>
  `
})

const FIELD_TEMPLATE = `
  <div class="dt-row w-100">
    <div class="pa3 dt dt--fixed w-90 center" id="field">
      <guess v-for="guess in guesses" v-bind:guess="guess"></guess>
    </div>
  </div>
`

Vue.component('sharebutton', {
  computed: {
    buttonClass: function() {
      if (this.guessed) {
        return ' dt-row'
      } else {
        return ' dn'
      }
    }
  },
  data: function() {
    let guessed = false
    // check if daily puzzle already done
    if(State.isGuessed(State.loadCurrentPool(State.buildPoolKey()))) {
      guessed = true
    }
    return {
      guessed: guessed
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
      this.guessed = !(this.guessed)
    }.bind(this))
  },
  template: `
  <div class="h2" :class="buttonClass">
    <div class="dim h2 w4 f4 tc ba b--white br2 pv1 white center mb5" v-on:click="share">
      поділитись
    </div>
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
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let key = "" + day + '.' + month + '.' + year

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
  },

  isGuessed: function(guesses) {
    // definitely not the perfectest way to detect if already guessed
    for(let i = 0; i < guesses.length; i++) {
      let guessed = true
      let guess = guesses[i]
      for(let j = 0; j < guess.length; j++) {
        letter = guess.letters[j]
        if (letter.state != LetterState.green) {
          guessed = false
          break
        }
      }

      if(guessed = true) {
        return true
      }
    }

    return false
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
      this.guesses[this.currentGuess] = guess
      localStorage.setItem(State.buildPoolKey(), JSON.stringify({guesses: this.guesses}))
      if (guess.compare(this.$root)) {
        this.currentGuess++
      }
    },
    back: function() {
      let guess = this.guesses[this.currentGuess]
      guess.backspace()
    },

    share: function() {
      localStorage.clear(State.buildPoolKey())

      let msg = 'Kobza ' + State.buildPoolKey() + "\n\n"
      let pageUrl = 'http://kobzaapp.github.io/daily'
      let blackSq = '\u2B1B' // ⬛
      let yellowSq = '\uD83D\uDFE8' //🟨
      let greenSq = '\uD83D\uDFE9' //🟩

      this.guesses.forEach(function(guess){
        if(guess.letters.length == 0) {
          return
        }

        msg += "\n"
        let guessScheme = ''
        guess.letters.forEach(function(letter){
          switch(letter.state) {
            case LetterState.disabled:
              guessScheme += blackSq
              break
            case LetterState.yellow:
              guessScheme += yellowSq
              break
            case LetterState.green:
              guessScheme += greenSq
              break
          }
        })

        msg += guessScheme
      })

      msg += '\n\n' + pageUrl

      console.log(msg)
      this.copyToClipboard(msg)
    },

    copyToClipboard: function(text) {
      // god bless stackoverflow(cursed)
      let dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
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
  <div class='grow buttonholder dtc h-100' v-on:click="press">
    <div class='white keyletter f6 tc br2 ttu pv3' :class="letterClass" >{{letter.char}}</div>
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
  <div class="fixed bottom-0 keyboard" id="keyboard">
    <div class="w-100 center dt dt--fixed pb1">
      <keyletter v-for="key in KEYS[0]" v-bind:letter="keys[key]"></keyletter>
    </div>
    <div class="w-100 center dt dt--fixed pb1">
      <keyletter v-for="key in KEYS[1]" v-bind:letter="keys[key]"></keyletter>
    </div>
    <div class="w-100 center dt dt--fixed pb1">
      <div class='dtc mh1 f1 buttonholder' v-on:click="back">
        <div class='white keyletter f6 tc br2 ttu pv3 v-mid bg-kstandard'><</div>
      </div>
      <keyletter v-for="key in KEYS[2]" v-bind:letter="keys[key]"></keyletter>
      <div class='dtc mh1 f1 buttonholder' v-on:click="forward">
        <div class='white keyletter f6 tc br2 ttu pv3 v-mid bg-kstandard'>></div>
      </div>
    </div>
  </div>
  `
})

Vue.component('tutorial', {
  data: function() {
    let skipTutorial = localStorage.getItem('skipTutorial')
    word1 = [
      new Letter('к', LetterState.green),
      new Letter('е', LetterState.disabled),
      new Letter('ф', LetterState.disabled),
      new Letter('і', LetterState.disabled),
      new Letter('р', LetterState.disabled)
    ]

    word2 = [
      new Letter('с', LetterState.disabled),
      new Letter('п', LetterState.disabled),
      new Letter('а', LetterState.yellow),
      new Letter('т', LetterState.disabled),
      new Letter('и', LetterState.disabled)
    ]

    word3 = [
      new Letter('т', LetterState.disabled),
      new Letter('е', LetterState.disabled),
      new Letter('ч', LetterState.disabled),
      new Letter('і', LetterState.disabled),
      new Letter('я', LetterState.disabled)
    ]

    return {
      showTutorial: !skipTutorial,
      word1: word1,
      word2: word2,
      word3: word3
    }
  },
  computed: {
    displayClass() {
      if (this.showTutorial) {
        return ''
      } else {
        return ' dn'
      }
    }
  },
  methods: {
    okay() {
      this.showTutorial = false
      localStorage.setItem('skipTutorial', true)
    }
  },
  mounted() {
    this.$root.$on('showTutorial', function() {
      this.showTutorial = true
    }.bind(this))
  },
  template: `
  <div :class="displayClass" class='absolute bg-kolor w-100 h-100 white pa3 f5 fw5' id="tutorial">
    <p>
    Вам потрібно відгадати загадане слово.
    </p>
    <p>
    У вас є 6 спроб.
    </p>
    <p>
    Після кожної спроби кольори секцій будуть змінюватися, щоб показати, наскільки ви були близькі. Наприклад:
    </p>

    <div class="dt dt--fixed h3">
    <letter v-for="letter in word1" v-bind:letter="letter"></letter>
    </div>

    <p>
    Літера К є в загаданому слові та знаходиться у правильному місці.
    </p>

    <div class="dt dt--fixed h3">
    <letter v-for="letter in word2" v-bind:letter="letter"></letter>
    </div>

    <p>
    Літера А є в загаданому слові, але знаходиться не у правильному місці.
    </p>

    <div class="dt dt--fixed h3">
    <letter v-for="letter in word3" v-bind:letter="letter"></letter>
    </div>

    <p>
    Цих літер немає в загаданому слові.
    </p>

    <div class="dim h2 w4 f4 tc ba b--white br2 pv1 white center mb5" v-on:click="okay">
      зрозуміло
    </div>
  </div>
  `
})

Vue.component('toprow', {
  methods: {
    showTutorial() {
      this.$root.$emit('showTutorial')
    }
  },
  template: `
  <div class="h2 dt-row">
    <div class="dim pointer h2 w2 ba white b--white br4 tc v-mid fr mt3 mr3 f4 fw6 pa1" v-on:click="showTutorial">?</div>
  </div>
  `
})


var game = new Vue({
  el: '#game',
  template: `
  <div>
    <tutorial></tutorial>
    <div class="full-height">
      <div id="fieldholder" class="dt">
        <toprow></toprow>
        <field></field>
        <sharebutton></sharebutton>
        <keyboard></keyboard>
      </div>
    </div>
  </div>
  `
})