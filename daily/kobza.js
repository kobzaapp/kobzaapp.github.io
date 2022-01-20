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
  constructor() {
    this.letters = []
  }

  addLetter(char) {
    if (this.letters.length >= GUESS_LENGTH) {
      // Нічого не робимо, букви не додаються
    } else {
      let letter = new Letter(char)
      this.letters.push(letter)
    }
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
      switch(this.letter.state) {
        case LetterState.standard: return 'bg-kstandard'
        case LetterState.disabled: return 'bg-kdisabled'
        case LetterState.yellow: return 'bg-kellow'
        case LetterState.green: return 'bg-kreen'
      }
    }
  },
  template: `
  <div class='letter w2 h2 fl mh1 tc' :class="letterClass">
  {{letter.char}}
  </div>
  `
})

Vue.component('guess', {
  props: ['guess'],
  template: `
  <div class='guess w-80 center flex justify-center'>
    <letter v-for="letter in guess.getLetters()" v-bind:letter="letter"></letter>
  </div>
  `
})

Vue.component('field', {
  data: function() {
    return {
      guesses: [
        new Guess(),
        new Guess(),
        new Guess(),
        new Guess(),
        new Guess(),
        new Guess()
      ],
      currentGuess: 0
    }
  },
  methods: {
    addChar: function(char) {
      console.log(char)
      this.guesses[this.currentGuess].addLetter(char)
    }
  },
  mounted: function() {
    console.log('field mounted')
    console.log(this.$root)
    this.$root.$on('pressed', function(char) {
      console.log(this)
      console.log(char)
      this.addChar(char)
    }.bind(this))
  },
  template: `
  <div class="vh-75 pa3" id="field">
    <guess v-for="guess in guesses" v-bind:guess="guess"></guess>
  </div>
  `
})

Vue.component('keyboard', {
  methods: {
    meld: function() {
      this.$root.$emit('pressed', this.char)
    }
  },
  data: function() {
    return {
      message: 'Hello Keyboard!',
      char: ''
    }
  },
  template: `
  <div class="vh-25" id="keyboard">
    <input v-model="char"></input>
    <button v-on:click="meld">{{char}}</button>
  </div>
  `
})

var game = new Vue({
  el: '#game',
  template: `
  <div>
    <field></field>
    <keyboard></keyboard>
  </div>
  `
})