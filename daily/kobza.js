if (!window.VALID_WORDS) {
  window.VALID_WORDS = ['срака']
  console.error('Word list have not loaded properly')
} else {
  console.log('Legal words are loaded')
}

Date.prototype.getKyivTime = function(){
  // NOTE: Initially we wanted to stick to Kyiv time, but eventually decided to go with device date for now.
  // const offset = this.getTimezoneOffset() / 60
  // this.setHours(this.getHours() + offset + 2); // adding offset will get us GMT +0, then add 2 hours to get Kyiv time

  return this
}

Date.prototype.getYesterday = function() {
  let copy = new Date(Object.assign(this))
  copy.setHours(copy.getHours() - 24)
  return copy
}

Date.prototype.getTomorrow = function() {
  let copy = new Date(Object.assign(this))
  copy.setHours(copy.getHours() + 24)
  return copy
}

const LetterState = {
  standard: 'Standard',
  disabled: 'Disabled',
  green: 'Green',
  yellow: 'Yellow'
};

function logEvent(eventName, details) {
  if (window.gtag) {
    if (details) {
      window.gtag('event', eventName, details)
    } else {
      window.gtag('event', eventName)
    }
  } else {
    console.error('failed to log. Wow. Just wow.')
  }
}

let keyboard='йцукенгшщзхфіївапролджєячсмитьбю'

function uuid() {
  function ff(s) {
    var pt = (Math.random().toString(16)+"000000000").substr(2,8)
    return s ? "-" + pt.substr(0,4) + "-" + pt.substr(4,4) : pt
  }
  return ff() + ff(true) + ff(true) + ff()
}

/*
  Якщо ви читаєте це - привіт!
  Якщо ви вмієте програмувати - то вам не стане зусиль зрозуміти,
  що код нижче відповідає за слова, що загадані наперед. Але ми
  просимо не поширювати ваші знахідки, щоб не псувати іншим людям
  гру. Дякуємо!
*/
let Wotd = {
  today: true,
  start_date: Date(2022,0,20),
  wotd_array: ['ab52e6dc', '10fccc922', 'f20cc96e', '58e3645e', '4e5c7322', '14c648ea4', '625e8de8', 'faa5db9e', '100c42b00', '12ca4d3ec', '14a507d36', 'c0af8de8', '20fcc9dce', '15a6c2a5e', '11c82178', '166ca8e4', '18cf2c87', '150f1daf8', '2b4f0548', '34729bea', '1326c2a5e', 'a24f4ef2', '13f1bcce4', '139268bee', '420fe324', '7ca4a08c', '20a55d95e', 'ac221bf8', 'ccce7cf9', '8264a3e2', '15425971e', '1c22ca16e', '1bb4f332e', '17213673a', '1e859d314', 'd97110f8', '1f74f04a2', '1fdc2cf1e', '1346f2c88', '6a6c1be2', 'e1323ef8', '71e53126', '1f86fd124', 'c9717946', '17b04899e', '1a9e62178', 'c471d99e', '186243f1e', 'eca4f32a', '9d2f1c8a', '15e7783f2', '6d2e7f36', '538f9f46', 'be53216e', '33c88b4', 'dc62496e', '1c8afe5c6', '1da0cccee', '1b13a939e', '19ebbe4e4', '12b128f2e', 'b10fcf2e', '1b5d09444', 'a7b0be2', '4cfd092', '1460f7086', '9a82896e', '17e0f0fc6', '1d133639e', '204c48c80', '1a1d2a300', '9646dd1e', 'd53de78', '1a7cf2c8e', '182eeda08', '25dc969e', '1225393a4', '852fa0b4', '31d9e0a0', '1246fc0a2', '1dc49ef0', 'b611925e', '1ee0c3bc6', '1152fd32a', '1c6229c8a', '4bd3651e', '1df3b8ca0', '3f307f36', '11e02899e', '1993493aa', '1f24323ca', '1d65924ee', '8b322848', '11a5924ee', '1addc629e', '2f821bca', 'e9d09eca', 'f744e464', '75cf5cee', '190b2d122', '56f9217a', '10471627a', '1bca4d330', '22048f36', '2029f3932', '3b928f9e', '1632ebf24', 'a46c2a5e', '93d37946', '65c4c95e', '164af8d36', '7a7fe16e', '1967bd3ca', '168cf3ece', '17643117a', '8ea28906', 'd3f1de78', 'e65c207a', '1e4242f22', '10bccc922', 'fe7783f2', '44729b22', '14289ecbc', '5d628b2e', '111db396e', '1ce6f1900', '16d73fb68', '18e24e08e', 'd60fa32a', 'b9319504', '188a453c0', '1e3917972'],
  decode(wotd) {
    let num = Number.parseInt(wotd, 16)

    // Yep, binary move left does not work for long numbers
    let ddeltaString = num.toString(2)
    ddeltaString = ddeltaString.slice(0, ddeltaString.length - 26)
    let ddelta = Number.parseInt(ddeltaString, 2)

    let result = []
    let magic = num & 1
    num = num >> 1
    for (let i=0; i<5; i++) {
      key = num & 0b11111
      result.push(keyboard[key])
      num = num >> 5
    }

    st = result.reverse().join('')
    if (magic) st = st.replace('г','ґ')
    return [st, ddelta]
  },
  getDateDiff: function(day) {
    let start_date = new Date(2022,0,20)
    return Math.round((new Date(day.getFullYear(), day.getMonth(), day.getDate()) - new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate()) ) /(1000 * 60 * 60 * 24));
  },
  getTodayDiff: function(day) {
    let today = new Date()
    return Math.round((new Date(day.getFullYear(), day.getMonth(), day.getDate()) - new Date(today.getFullYear(), today.getMonth(), today.getDate()) ) /(1000 * 60 * 60 * 24));
  },
  getCurrentSessionDate: function() {
    return this.currentSessionDate
  },
  word: undefined
}
function setWotd(day = (new Date().getKyivTime())) {
  Wotd.currentSessionDate = day
  let dateDiff = Wotd.getDateDiff(day)
  for (let i=0; i<Wotd.wotd_array.length; i++) {
    let wotd = Wotd.wotd_array[i]
    let decode = Wotd.decode(wotd)
    if (decode[1] == dateDiff) {
      Wotd.word = decode[0]
      break
    }
  }
}
setWotd(new Date())


class Letter {
  constructor(char, state) {
    this.char = char
    if (state) {
      this.state = state
    } else {
      this.state = LetterState.standard
    }
    this.uuid = uuid()
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
    this.uuid = uuid()
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
      root.$emit('showPopup', 'На жаль, такого слова немає у словнику. Спробуйте інше.')

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
      return true
    }
    for (let i=0; i<GUESS_LENGTH; i++) {
      let letter = this.letters[i]
      if (letter.state == LetterState.green) {
        continue
      }
      if (otherLetters.indexOf(letter.char) >= 0) {
        root.$emit('keystate', letter.char, LetterState.yellow)
        letter.state = LetterState.yellow
        otherLetters.splice(otherLetters.indexOf(letter.char), 1)
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
    root.$emit('showLongPopup', 'Вітаємо! Ви вгадали слово! Повертайтесь завтра за новою щоденною загадкою.')
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
  <div class="letterbuttonholder">
    <div :class="letterClass" class='letter f2 tc ttu white br2 fw7'>
      <div class="char">{{letter.char}}</div>
    </div>
  </div>
  `
})

Vue.component('guess', {
  props: ['guess'],
  template: `
  <div class='guess center'>
    <letter v-for="letter in guess.getLetters()" v-bind:letter="letter" :key="letter.uuid"></letter>
  </div>
  `
})

const FIELD_TEMPLATE = `
  <div id="fieldholder" class="">
    <div class="w-80 center mt3" id="field">
      <guess v-for="guess in guesses" v-bind:guess="guess" :key="guess.uuid"></guess>
    </div>
    <sharebutton></sharebutton>
  </div>
`

Vue.component('sharebutton', {
  computed: {
    buttonClass: function() {
      if (this.display) {
        return ' '
      } else {
        return ' dn'
      }
    }
  },
  data: function() {
    let display = false
    // check if daily puzzle already done
    if(State.isGuessed(State.loadCurrentPool(State.buildPoolKey()))) {
      display = true
    }
    return {
      display: display
    }
  },
  methods: {
    share: function() {
      this.$root.$emit('share')
    }
  },
  mounted: function() {
    this.$root.$on('success', function() {
      this.display = true
    }.bind(this))
    this.$root.$on('failure', function() {
      this.display = true
    }.bind(this))
    this.$root.$on('restart', function() {
      this.display = false
    }.bind(this))
  },
  template: `
  <div :class="buttonClass" class="mt2 h2 w4 f4 tc ba b--white br2 white center" v-on:click="share" id="sharebutton">
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
    let currentSessionDate = Wotd.currentSessionDate || (new Date())
    let now = currentSessionDate.getKyivTime()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let key = "" + day + '.' + ('0' + month).slice(-2) + '.' + year

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
      if (guess.letters.length < GUESS_LENGTH) {
        continue
      }
      for(let j = 0; j < guess.letters.length; j++) {
        letter = guess.letters[j]
        if (letter.state != LetterState.green) {
          guessed = false
          break
        }
      }

      if(guessed == true) {
        return true
      }
    }

    return false
  }
}

Vue.component('field', {
  data: function() {
    // let guesses = State.loadGuesses()
    // let gameEnded = false
    // let currentGuess = 0
    return {
      guesses: [],
      currentGuess: 0,
      gameEnded: false,
      success: false
    }
  },
  methods: {
    restart: function() {
      this.gameEnded = false
      this.success = false
      this.currentGuess = 0
      this.guesses = State.loadGuesses()
      while(this.guesses[this.currentGuess] && this.guesses[this.currentGuess].letters.length > 0) {
        this.guesses[this.currentGuess].compare(this.$root)
        this.currentGuess++
        this.checkLoss()
      }
    },
    addChar: function(char) {
      if (!this.gameEnded) {
        this.guesses[this.currentGuess].addLetter(char)
      }
    },
    forward: function() {
      if (this.gameEnded) {
        return
      }

      if (this.guesses[this.currentGuess].compare(this.$root)) {
        logEvent('guess_made', {index: this.currentGuess})
        this.currentGuess++
        this.checkLoss()
        localStorage.setItem(State.buildPoolKey(), JSON.stringify({guesses: this.guesses}))
      }
    },
    back: function() {
      if (!this.gameEnded) {
        let guess = this.guesses[this.currentGuess]
        guess.backspace()
      }
    },
    checkLoss() {
      if (this.currentGuess > 5 && !this.success) {
        this.endGame = true
        this.$root.$emit('showLongPopup', `На жаль, вам не вдалось вгадати слово. Розгадкою було "${Wotd.word}". Щасти вам завтра!`)
        this.$root.$emit('failure')
        logEvent('game_failed')
      }
    },
    share: function() {
      let title = 'Кобза ' + State.buildPoolKey() + "\n\n"
      if (Wotd.getTodayDiff(Wotd.getCurrentSessionDate()) != 0) {
        title = 'Ретро '+title
      }
      let text = ''
      let url = 'kobzaapp.github.io'
      let blackSq = '\u2B1B' // ⬛
      let yellowSq = '\uD83D\uDFE8' //🟨
      let greenSq = '\uD83D\uDFE9' //🟩

      this.guesses.forEach(function(guess){
        if(guess.letters.length == 0) {
          return
        }

        guess.letters.forEach(function(letter){
          switch(letter.state) {
            case LetterState.disabled:
              text += blackSq
              break
            case LetterState.yellow:
              text += yellowSq
              break
            case LetterState.green:
              text += greenSq
              break
          }
        })

        text += '\n'
      })
      text += '\n'

      console.log('' + title + text + url)
      this.copyToClipboard('' + title + text + url)
      this.$root.$emit('showPopup', 'Скопійовано в буфер обміну')

      // // use native share dialogue for Safari
      let skipBrowser = /(Macintosh).*Safari/.test(navigator.userAgent);
      if (navigator.share && !skipBrowser) {
        navigator.share({
          title: 'Дивись, яка цікава гра!',
          text: '' + title + text + url,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
      }
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
    this.$root.$on('restart', function() {
      this.restart()
    }.bind(this))
    this.$root.$on('success', function() {
      logEvent('game_success', {index: this.currentGuess})
      this.success = true
      this.gameEnded = true
    }.bind(this))
    this.restart()
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
    },
    restart() {
      console.log('restarting keyboard')
      for (let i=0; i<this.KEYS.length; i++) {
        let row = this.KEYS[i]
        for (let j=0; j<row.length; j++) {
          this.keys[row[j]].state = LetterState.standard
        }
      }
      let guesses = State.loadGuesses()
      for (let i=0; i<guesses.length; i++) {
        let guess = guesses[i]
        for (let j=0; j<guess.letters.length; j++) {
          this.updateLetter(this.keys[guess.letters[j].char], guess.letters[j].state)
        }
      }
    }
  },
  mounted: function() {
    this.$root.$on('keystate', function(char, state) {
      this.updateLetter(this.keys[char], state)
    }.bind(this))
    this.$root.$on('restart', function() {
      this.restart()
    }.bind(this))
    this.restart()
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Backspace') {
        this.back()
      } else if (e.key == 'Enter') {
        this.forward()
      } else if (e.key == 'ArrowLeft') {
        this.$root.$emit('dateprev')
      } else if (e.key == 'ArrowRight') {
        this.$root.$emit('datenext')
      } else {
        let key = e.key.toLowerCase()
        for (let i=0; i<this.KEYS.length; i++) {
          let row = this.KEYS[i]
          for (let j=0; j<row.length; j++) {
            if (key == row[j]) {
              this.$root.$emit('pressed', row[j])
            }
          }
        }
      }
    });
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
    return {
      char: '',
      keys: keys,
      KEYS: KEYS
    }
  },
  template: `
  <div class="keyboard" id="keyboard">
    <div class="w-100 center dt dt--fixed pb1">
      <keyletter v-for="key in KEYS[0]" v-bind:letter="keys[key]" :key='key'></keyletter>
    </div>
    <div class="w-100 center dt dt--fixed pb1">
      <keyletter v-for="key in KEYS[1]" v-bind:letter="keys[key]" :key='key'></keyletter>
    </div>
    <div class="w-100 center dt dt--fixed pb1">
      <div class='dtc mh1 f1 buttonholder' v-on:click="back">
        <div class='white keyletter f6 tc br2 ttu pv3 v-mid bg-kstandard'>
          <img src="delete.png" class="dib deletepic"/>
        </div>
      </div>
      <keyletter v-for="key in KEYS[2]" v-bind:letter="keys[key]" :key='key'></keyletter>
      <div class='dtc mh1 f1 buttonholder' v-on:click="forward">
        <div class='white keyletter f6 tc br2 ttu pv3 v-mid bg-kstandard'>
          <img src="enter.png" class="enterpic"/>
        </div>
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
  <div :class="displayClass" class='absolute bg-kolor w-100 h-100 white pa3 f5 fw5 center' id="tutorial">
  <div class="tutorialholder">
    <div class="pa1">
    Вам потрібно відгадати загадане слово.
    </div>
    <div class="pa1">
    У вас є 6 спроб.
    </div>
    <div class="pa1">
    Після кожної спроби кольори секцій будуть змінюватися, щоб показати, наскільки ви були близькі. Наприклад:
    </div>

    <div class="guess h3 mv1">
    <letter v-for="letter in word1" v-bind:letter="letter" :key='letter.char'></letter>
    </div>

    <div class="pa1">
    Літера К є в загаданому слові та знаходиться у правильному місці.
    </div>

    <div class="guess h3 mv1">
    <letter v-for="letter in word2" v-bind:letter="letter" :key='letter.char'></letter>
    </div>

    <div class="pa1">
    Літера А є в загаданому слові, але знаходиться не у правильному місці.
    </div>

    <div class="guess h3 mv1">
    <letter v-for="letter in word3" v-bind:letter="letter" :key='letter.char'></letter>
    </div>

    <div class="pa1">
    Цих літер немає в загаданому слові.
    </div>

    <div class="dim h2 w4 f4 tc ba b--white br2 pv1 white center mv2" v-on:click="okay">
      зрозуміло
    </div>
  </div>
  </div>
  `
})

Vue.component('wotdError', {
  data: function() {
    let showError = typeof Wotd.word == 'undefined'
    return {
      showWotdError: showError
    }
  },
  computed: {
    displayClass() {
      if (this.showWotdError) {
        return ''
      } else {
        return ' dn'
      }
    }
  },
  methods: {
    okay() {
      this.showWotdError = false
      localStorage.setItem('showWotdError', false)
    }
  },
  mounted() {
    this.$root.$on('showWotdError', function() {
      this.showWotdError = true
    }.bind(this))
  },
  template: `
  <div :class="displayClass" class='absolute bg-kolor w-100 h-100 white pa3 f4 fw5 center' id="wotdError">
  <div class="tutorialholder">
    <p>привіт!</p>

    <p>схоже, у нас проблеми із словом дня. скоріш за все, ми про це нічого не знаємо, тому напишіть нам в твітер <a href="https://twitter.com/kobzaapp" class="white">@kobzaapp</a> і слідкуйте за оновленнями.</p>

    <p>що робити вам? спробуйте встановити <a href="https://kobzaapp.github.io" class="white">мобільний додаток</a> або вгадати випадкові слова <a href="https://kobzaap.github.io/playforukraine" class="white">за оцим посиланням</a>.</p>
  </div>
  </div>
  `
})

const FIXNAME = '20222803fix'
const LASTFIXDATE = new Date('2022-04-01')

Vue.component('wotdCleanup', {
  data: function() {
    let messageShown = localStorage.getItem(FIXNAME)
    let showPopup = messageShown ? false : new Date() < LASTFIXDATE
    console.log(messageShown, showPopup)
    return {
      showWotdCleanup: showPopup
    }
  },
  computed: {
    displayClass() {
      if (this.showWotdCleanup) {
        return ''
      } else {
        return ' dn'
      }
    }
  },
  methods: {
    okay() {
      localStorage.setItem(FIXNAME, true)
      localStorage.removeItem('28.03.2022')
      localStorage.removeItem('27.03.2022')
      localStorage.removeItem('26.03.2022')
      this.showWotdCleanup = false
      this.$root.$emit('restart')
    }
  },
  template: `
  <div :class="displayClass" class='absolute bg-kolor w-100 h-100 white pa3 f4 fw5 center' id="wotdError">
  <div class="tutorialholder">
    <p>привіт!</p>

    <p>в нас була проблема із загаданими словами з 26 по 28 березня. вибачте за незручності. одразу після того, як ви натиснете магічну кнопку нижче &mdash; всі проблеми зникнуть і можна буде знов відгадувати щоденні слова.</p>

    <p>але про всяк випадок все ж підпишіться на наш твітер <a href="https://twitter.com/kobzaapp" class="white">@kobzaapp</a>, щоб написати нам, якщо знов щось піде не так.</p>

    <div class="dim h2 w4 f4 tc ba b--white br2 pv1 white center mv2" v-on:click="okay">
      зрозуміло
    </div>
  </div>
  </div>
  `
})

Vue.component('popup', {
  data: function() {
    return {
      showPopup: false,
      text: ''
    }
  },
  methods: {
    hide() {
      this.showPopup = false
    }
  },
  computed: {
    displayClass() {
      if (this.showPopup) {
        return ''
      } else {
        return ' dn'
      }
    }
  },
  mounted() {
    this.$root.$on('showPopup', function(text, keepAlive) {
      this.showPopup = true
      this.text = text
      if (!keepAlive) {
        setTimeout(this.hide.bind(this), 1500)
      }
    }.bind(this))
  },
  template: `
  <div :class="displayClass" class='popup fixed w-100 white pa3 f5 f3-m fw5'>
    <div class="bg-kdisabled br2 center pa3">
      {{text}}
    </div>
  </div>
  `
})

Vue.component('longPopup', {
  data: function() {
    return {
      showPopup: false,
      text: '',
      hours: 23,
      minutes: 59,
      seconds: 59
    }
  },
  methods: {
    hide() {
      this.showPopup = false
    },
    updateTimers() {
      let now = new Date().getKyivTime();
      let tomorrow = new Date(new Date().getKyivTime().setHours(24,0,0,0));

      let ms = tomorrow.getTime() / 1000 - now.getTime() / 1000;
      let hours = Math.floor(ms / 3600);
      ms = ms - hours * 3600;
      let minutes = Math.floor(ms / 60);
      ms = ms - minutes * 60;
      let seconds = Math.floor(ms);

      this.hours = '' + ((hours < 10) ? "0" + hours : hours)
      this.minutes = '' + ((minutes < 10) ? "0" + minutes : minutes)
      this.seconds = '' + ((seconds < 10) ? "0" + seconds : seconds)
    }
  },
  computed: {
    displayClass() {
      if (this.showPopup) {
        return ''
      } else {
        return ' dn'
      }
    }
  },
  mounted() {
    this.$root.$on('showLongPopup', function(text) {
      this.showPopup = true
      this.text = text
    }.bind(this))
    this.$root.$on('restart', function() {
      this.showPopup = false
    }.bind(this))
    setInterval(this.updateTimers.bind(this), 1000)
  },
  template: `
  <div :class="displayClass" class='longPopup fixed w-100 white pa3 f5 f3-m fw5'>
    <div class="bg-kdisabled br2 center pa3">
      <div>{{text}}</div>
      <div class="pv2">Нова загадка за {{hours}}:{{minutes}}:{{seconds}}</div>
    </div>
  </div>
  `
})

Vue.component('dateselect', {
  data: function() {
    let today = new Date()
    return {
      TODAY: new Date(),
      display: false,
      currentDate: today,
      previousDate: today.getYesterday(),
      nextDate: today.getTomorrow()
    }
  },
  methods: {
    prev() {
      if (!this.display) return
      if (Wotd.getDateDiff(this.currentDate) <= 0) return
      // Wotd.today = false ???
      this.nextDate = this.currentDate
      this.currentDate = this.previousDate
      this.previousDate = this.currentDate.getYesterday()
      setWotd(this.currentDate)
      this.$root.$emit('restart')
    },
    next() {
      if (!this.display) return
      if (Wotd.getTodayDiff(this.currentDate) >= 0) return
      this.previousDate = this.currentDate
      this.currentDate = this.nextDate
      this.nextDate = this.currentDate.getTomorrow()
      setWotd(this.currentDate)
      this.$root.$emit('restart')
    }
  },
  computed: {
    displayClass: function() {
      return this.display ? ' dib ' : ' dn '
    },
    displayPrevClass: function() {
      return Wotd.getDateDiff(this.currentDate) == 0 ? ' o-10 ' : ' o-80 '
    },
    displayNextClass: function() {
      return Wotd.getTodayDiff(this.currentDate) == 0 ? ' o-10 ' : ' o-80 '
    },
    dateDisplay: function() {
      if (Wotd.getTodayDiff(this.currentDate) == 0) { return 'сьогодні' }
      let months = ['січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня']
      return this.currentDate.getDate() + ' ' + months[this.currentDate.getMonth()] + ' ' + this.currentDate.getFullYear()
    }
  },
  mounted() {
    this.$root.$on('success', function() {
      this.display = true
    }.bind(this))
    this.$root.$on('failure', function() {
      this.display = true
    }.bind(this))
    this.$root.$on('dateprev', function() {
      this.prev()
    }.bind(this))
    this.$root.$on('datenext', function() {
      this.next()
    }.bind(this))
  },
  template: `
    <div class="white-80 dateselect fl" :class='displayClass' >
      <img :class='displayPrevClass' src="arrow.png" class="h1 pastbutton" v-on:click='prev' />
      {{dateDisplay}}
      <img :class='displayNextClass' src="arrow.png" class="h1 futurebutton" v-on:click='next' />
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
  <div class="dt-row flex items-center justify-between pt2 ph4">
    <a href="https://kobzaapp.github.io/">
      <div class="f5 fw1 white-70 fl">
        <img src="../resources/appicon.png" class="ba b--white-60 br2 h2" alt="" />
      </div>
    </a>
    <dateselect></dateselect>
    <div class="pointer h2 w2 ba br4 white-80 b--white-80 tc v-mid fl f4 fw6 pa1" v-on:click="showTutorial">?</div>
  </div>
  `
})

var game = new Vue({
  el: '#game',
  template: `
  <div>
    <popup></popup>
    <longPopup></longPopup>
    <wotdError></wotdError>
    <wotdCleanup></wotdCleanup>
    <tutorial></tutorial>
    <div class="full-height">
      <div id="gameholder">
        <toprow></toprow>
        <field></field>
        <keyboard></keyboard>
      </div>
    </div>
  </div>
  `
})