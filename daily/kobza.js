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
  wotd_array: ['2f821bca', 'b9cc595c6', '2ea11bd5e', 'c067fa164', '2a03b33ca', '4a4629922', '5412fcb1c', '53e728094', 'be512a16e', '44e2fa1c8', '9ab33db9e', '3c25e73e6', '373231424', '7f45c7322', '314d1925e', 'cc73c24ee', '522123f1e', '966025ec6', '9f25e8b00', '222127306', '26b0438de', '75b845164', '9a82896e', '2721be148', '75e5133ca', '4e2438bc0', 'fe7783f2', '15a6c2a5e', '7f8ac88de', 'b56a5d86e', '4265e2478', '4ef3a171e', '34729bea', 'c9c6fd30a', '70f309bdc', 'c5f44cb2e', '9173c2168', '14a507d36', '10fccc922', 'bb1cccf3a', '4de32d3ca', 'ad723748e', '3a43b8c92', '892821bf8', '1d133639e', 'd98629f78', '22d722d3e', '6b1db6a68', '722bb8c86', 'bbb423cee', 'db2f92ec0', 'bd25e8b12', '3e73a1258', '3d22c7148', '4d75b38de', 'baa7b80de', '68ddb330a', '46ddc8cac', 'a156f74a2', 'bcc321b38', 'be9db8b3c', 'e9d09eca', '2972374b8', '31d9e0a0', '57e92f6f0', '844838bca', '70073908a', 'af8d29f56', '81b2256c0', '32e9b3122', 'de52f0388', 'd60fa32a', '64462d6f2', 'a4a519bca', '14289ecbc', '54d4f1922', '36e1cd86e', 'b9b337fa4', '5832ce0de', '95f3fa938', 'df3928b06', '322bb9938', 'b4a8284e4', 'aee0f8964', 'b7e53217a', '301cc2ec6', '9738f1e58', '40d0ce0de', '24cbb48de', 'bee5ed30a', 'c5212732e', 'a2fcc34fa', 'dd6129dc6', 'd44af9edc', 'e06823964', 'd90af86f2', '2de6cc79e', '7d742a464', '9fb4f2b2e', '7ca4a08c', '33c88b4', '6f2e3967a', 'b5f4f9ec0', '870620ec0', '7e6468b14', '420cf2d2b', '49b244c8a', '6f7825cee', '2562cac86', '164af8d36', '9d9dbd322', '1632ebf24', '6e632a6f0', '23f4fcf3a', '83e0fcedc', '6817218b2', 'ccf5277b6', 'b00b2aec6', '8174f2f04', '48f322be2', '6032c8ec0', '8dc6e971e', '67e0fa4e4', '3d67b53f0', '28e124922', '4bf2cd0de', '9a0d298de', 'd97110f8', '99e041be2', 'aa5db83e8', '10471627a', '10bccc922', '7cddb83f2', 'cbb3c7c48', '72b9b530e', 'b866ca122', 'c9717946', 'd2ccca164', '93c936432', 'a3b82d79e', '437d3fd24', '248d111de', '1f24323ca', '7805e919e', 'a469b73ca', '6da125328', 'cda04cf24', '45cc2d0de', '5b62438de', '995cf988a', '80a22f0de', '47a9286f2', '8f7d2016e', '12ca4d3ec', 'ad20c4964', '7b38f2c86', '16d73fb68', 'd6f4f5b2e', '54b4c0964', 'da29b73c6', 'bde3b19de', '1fdc2cf1e', 'd8e8f9930', 'c0d2f9618', '25071dcfa', '69289730a', '8116c8e9e', '9e32a269e', '7ff5fccd8', 'ae73be464', '4f06f9b00', 'acb2378b8', 'aa39283d2', '42f321938', 'e0a12710a', 'c832e661e', '6242434de', 'dab2fd7a4', '31c4e94fe', '38f22a164', '1c22ca16e', '82cc401de', '6739196bc', '3474f4c86', '3f6da2ec0', '231cc4c86', '9ecee7cfa', 'c033c95c6', '5c6041ce4', '404afbb84', '7f20433f2', '8cb9195ca', '7ea22c0de', '6a471915e', '7af9b8bea', 'c32a28f9e', 'e110cc0de', '2f3d1648e', '688d1151e', 'a46c2a5e', 'cfc629b0e', '69702abc6', '430acc6ee', '526121922', 'af78ff08a', 'b4d739418', 'bc282d0de', '61e229938', '4092f86f8', 'ca3048b9e', '7cb3a119e', '4e5c7322', '84e8c88de', '9e8724926', 'ae8712524', '1346f2c88', '924eccf3a', 'b611925e', '8f285beb6', '607248b2e', '35a6c81c8', 'd1d33db9e', '96b52039e', 'caf33214c', 'dbddc261e', '4556f9cb2', '5893a615e', 'c166c73c6', '885cfa8e4', 'd8212a09c', '5e52f9cb4', '32a2cc164', 'b3c7194fa', '2ba929be2', 'c68acb8e4', 'a9d3a6678', '5a7308900', '8e2582ec0', 'b8e82e6c0', '554c2cbe2', '4873b2dc6', '6c7448b2e', '2cbc25922', '7066c0900', '29e12d6da', 'dcfc4e48a', '8d92f2cb2', '634d17968', 'bd9aa2b00', '2bc62516e', 'be53216e', '529f1188e', '2e6223b00', 'd3f1de78', 'cb25060de', 'd13d3794e', 'ba3244bf4', '39cd1db9e', '790afe5cc', '7659986f8', '2fbcfc486', '3b87f7138', '513cce0b4', '3a8d3d95e', 'ddd31be1e', 'a229b7164', '538f9f46', 'a9854217a', '7c4d283c6', '390c42cb4', '7ef322dd4', 'c2fcc98de', 'dec6434fa', '98702e0e4', '2fdcce122', '78e13df1e', '458e28c1e', '85e12a6d4', '491db8bd2', 'a760cc0de', 'c4211d978', '31211d942', '55272f6c6', 'e013a919e', '67471dce4', 'b478f1caa', 'a69d99b28', '92e8288de', 'b392fd486', '3f12f74a8', '18cf2c87', 'b8a1bb8de', '1225393a4', '5bc2280e4', '940bbe0de', '474e21bf0', '591cf4c8a', 'c562400de', 'd872f9c8a', 'ab9cc1964', 'a54fb5922', '51744e3e6', '1a9e62178', '5b272d0de', '92904f338', '5f985e6f4', 'd0f3703a4', '90cefe08a', '4c619d95e', 'b513a7cc4', 'ab62fc0f6', '190b2d122', '5972ebf1e', '8cdd21be6', 'b0f249fc6', '6b564e6ce', '8b22448b2', 'ce86fe4a8', 'bc84563f8', '77951be46', '26182a100', '9fd316678', '3669bd0de', '4963bcbc6', '38a12f0b8', '3f859d3c6', 'b1472d322', '5d4547ce4', 'faa5db9e', 'c34c2d4a2', 'bbcafcee0', 'c93cf4ef2', '258afc4b2', '81cb28e9e', 'c6d7288b4', '1c6229c8a', '35e0f5cb2', '5d628b2e', '4cfd092', '65f249ad8', '668d3db9e', '907912170', '1ce6f1900', 'a887bc938', '6abcf9c8a', '2cc6283ea', '387c21938', '948d1153a', '938cc98de', '71cc298e4', '961db9b38', '2283b299e', '11c82178', '5ef0f9ec0', 'b1d528d1e', '27a0f98e4', 'dc16c18b2', 'd7284d48a', '100c42b00', 'b40d31268', 'd53de78', 'd2224708a', '55a22f30a', 'c64728998', 'c1f4c4922', 'eca4f32a', '504fc7958', '17643117a', '5760238de', '955de8b28', '2aa2f0b2e', '83849f330', 'e65c207a', '6d27b3bc0', 'ade92e6c6', '77e97e126', '903528128', 'c2b3a94de', 'a7b0be2', 'd6392190a', '1c8afe5c6', 'c1b1b8b9e', 'f744e464', '698e28eca', 'b667b80e4', '29b4ce0de', 'd4e129b32', '4a0f0945e', '8322f048a', '6a6c1be2', '958cf8934', '8fde30b2e', '6d2e7f36', '7a7fe16e', '8646f84b8', 'c263b2c86', '7a3d2b07a', '67aa283ca', '762469de8', '41e122be8', '6dd5a1464', '6c88b64a0', '8565e9b06', '737429bf8', '399e3e6dc', '95133979e', 'dfe6c1922', '43dc69458', '91250e6c6', '1246fc0a2', '3e9249f42', '6e34f48b8', 'a8dcca8de', 'dd8722fd4', '989fe9478', '69f429dea', '35352a95e', 'c9a22832e', '8264a3e2', '48251332e', 'c8be51922', 'd51db8b12', '8e5db8c86', '18e24e08e', '4bd3651e', '6f95a64fa', '86dda64e4', '7320c28de', 'a11e30ed2', '640fc8bd6', '3af425f1e', 'bc7d2cec0', '5abcf9938', '4aa1325a2', '65304cf3a', '383d1917a', '83730244e', '2c66cc8de', 'a9072f45e', 'dbbcc34b4', '50aaf1938', '3c611bea4', '65c4c95e', '4b692f448', '874c27964', 'cd65e8bd2', '795c2a0de', 'd573c74a6', '88ae5e3e2', '5cb3c941e', 'c7a82aec0', '94d528900', 'dca221bdc', '186243f1e', 'a18d2d30a', 'c8d991c5e', 'a2a3bf3c6', '62d34979e', '9acaf7328', '8bc72832e', 'd40728e9e', '79a126a68', '7df3c2006', '743325b38', '397d36524', 'ae3cc9c86', '98d73945e', '51d4f8e24', '28b321b26', '11e02899e', '6196233f2', '30a137f24', 'd361288b0', '4d902c0de', '56f9217a', '15e7783f2', '751feddc6', 'a08d1797a', '9d384c32e', '79e12f306', 'cc20fcea4', '17e0f0fc6', '78b4f5b0a', 'ad9db38de', '4e8c2c164', '50cb2cb00', '5a3307a74', 'de942e322', '71b8288de', '96f23979e', '6322fa324', '4b25e8ef2', '6c20233f0', '6491be486', '188a453c0', '30684f338', '1bca4d330', '17b04899e', 'a3d8e8ef8', '654cccf3a', '1addc629e', '65bcc308a', 'a79c69efc', '420fe324', '7d05c261e', '1bb4f332e', '610f3fa9e', '8987194ee', 'd28fb2c86', 'cb4e2d122', '2b4f0548', '13f1bcce4', '1993493aa', 'd7bc28e5e', '9b0dba0e4', 'a24f4ef2', '97e542bc6', '51a1b98de', '6bb2fc486', '7b7921be2', 'd678286c6', 'be0b276c0', 'b967ff6c0', '1a1d2a300', '4b872a95e', 'b1b2e6564', '5f46f34a2', 'a52029f72', 'ab52e6dc', 'a1e9271c8', '66692cf6c', '2133a2470', '8c68224fa', '4f8e48ed6', '37caf88b0', '3ce77c164', '239c39be8', '8079b8bca', 'abe8cb71e', 'b222ca148', '150f1daf8', '59df1531c', '34d85aee2', '3f307f36', '1a7cf2c8e', '2366430e4', 'a0f42a45e', '1152fd32a', '2c212f300', '1460f7086', '8b7528dc6', '1e3917972', '88f3cdcfa', '5fdd9b8e4', 'b5a8c761e', '9d2f1c8a', '52f91941e', '63de56224', 'dd06f84ee', '7a4d28b14', '8ea6f4922', '46333641e', 'ac5e1e106', '9d4450b2e', '2932238de', 'd0a848e9e', 'da4f08cb8', '6ebd3da7a', '26f2fd6c0', '1967bd3ca', '8287bcce4', '6d65cc6c0', '326123086', '3da43cee8', '545242b38', '1f86fd124', '6873c141e', '8b8d2cf2e', '727c28d1e', 'bd4c49b00', 'aff32e0de', '3b12f7338', 'b10fcf2e', '9b4ee207a', '168cf3ece', '27d736478', '489db5328', '1f74f04a2', 'c4a9b9922', 'd68fb28de', '73bd379a4', '1b5d09444', '880645b22', '2244e2454', '2d712710a', '17213673a', '9be13973a', '5e9cc2c86', '410aff30c', '12b128f2e', '629c2cec6', 'ccce7cf9', '4ca84888a', 'acc24a45e', '8ed2fd322', '563428ce4', '5db84d7a2', '9c65a24de', '428a2e464', '7bf4238de', '37b8c808a', 'b04fb5c8a', '43a12269e', 'b933c93a0', '4c1eee4a2', '3edd8945e', '2d86f7122', 'c3de38ee6', '710c2a486', 'd2471141e', '5cdc69444', 'e1323ef8', '33c6c9922', 'b63842ca2', '8a573b99e', 'bf9892c9c', '214e3951e', '625e8de8', '1d65924ee', '1ee0c3bc6', '849428e9e', '5691b8058', '981c48f3a', 'b720c1938', '6ccaca8de', 'b292fc332', '7b9d8215e', 'c599af6e2', '77573794c', 'ac1cca08a', '3360c9cb8', '74a02cf08', '9de243798', 'd5a95781c', '8ea28906', '33a823c86', '6a1db1cb2', 'a9692c0de', '8205a64e4', 'c20c5dd1e', '331648e9e', '584d1141e', 'aab4f292a', '41872a90a', 'a66778b9e', 'cf06253e2', '8a873269e', '60c438bc0', '2a73c615e', '2b4cfcce4', '2e33d947c', 'd19d1951e', '620629c8a', '277242bf8', '614482178', '852d1267a', '7e1c59618', '34b4c2938', '59b30d95e', '5f0d25c48', 'b0aa4e48a', '74689d99f', '9646dd1e', '99a11265e', 'a8791141e', '4f602cf24', '55e3233f0', 'ac221bf8', '66124896e', '46a24f0b2', 'd7d4edcee', 'cdd999bf4', '3fe91939e', 'df9c24ca6', '9a78cc964', '3bf91de18', '58e13639e', '1e859d314', '19ebbe4e4', 'dc62496e', '2b20ccc86', '3b928f9e', 'b256f34b8', 'bff4f8964', 'd8b2fe6e2', '6395be464', 'b2e117ba4', '9366cd7a4', 'd3b12f338', '362847312', '47d347cee', '4022c48de', '25cf3794c', '5c3cf3138', '30f3f6f1e', 'ccb241f1e', 'c63c298de', 'bb72324ee', '9ce6cd2de', 'cf6129ff2', '45342e164', 'a83cc9938', '8b322848', '20a55d95e', '5e39280de', 'a5e04cec6', '4af2fe6ca', '78602a45e', '6084973e2', 'af16fb972', '5d3c29f46', 'e0e9bc8e4', 'd773c74a2', '2842c9ec0', '768f25922', '852fa0b4', 'cbe599b20', '25dc969e', '3c8592ec0', '11a5924ee', 'cfa62c8de', '858727328', '31962a922', 'ced3e8cae', '1b13a939e', '9192fc89c', 'ca7c28ec0', '8f8e57c32', '9bb37b3a4', 'b328c70de', 'dafcf2922', '1326c2a5e', '97a8ca8de', 'ba7db88de', '8952ff300', '111db396e', 'aad04a464', '56e6f496e', '530acd0de', 'd5df91938', 'd3e848f98', '9e72f9ff8', '3435bc8de', 'b787228b2', '74f221964', 'a61cf9938', '44058217a', '7c34cc848', '22048f36', '2d05a6678', 'b6e6c76c0', '4651234de', '4706fcee2', '44b91279e', '571d01646', '7d9db98de', '947cc00de', '6bdfa617a', '8d733119e', 'a716f9f4e', 'ab16f1b22', '8adeb20f8', 'c09712170', 'a4ddbe5cc', 'd1612d330', 'a3612e5cc', 'db6438b34', '44729b22', 'd0072773a', '5dfc20164', 'a412f88bc', '182eeda08', 'c4e0c9c8a', '3a344e6f2', 'a021256e6', 'b81ccc164', '283d228b2', 'd0692d10a', '368aff322', '4fe123886', 'b9319504', '71e53126', 'bf73200de', '204c48c80', '908f21922', '2af238bfe', '2ec9cd8de', 'd4a2ca164', 'cd1b41ec0', '1dc49ef0', 'c3a912016', '21b82d3ca', '20fcc9dce', '3b60250e4', '1df3b8ca0', '6af9b51c8', '58e3645e', '991f71d48', '139268bee', '89ddbf322', '66e042be6', '76c6f3c24', '757d1ba46', '3e34f8948', '64d2fcb3c', '53b238bfc', '374724cee', 'c45719178', 'b112f86f2', '2f664d0a2', '503322938', '9c87bcf3a', '4445474ac', 'c7f44e3ca', 'a7d2ff30c', '7aa6c71de', 'a320f0486', '8612fc6ca', '72f9b8e5e', '7712f330a', '35692f322', 'bae128900', '6fe4560f2', '4154e6678', '86b24832e', '8795cdba4', '3dd529880', '1e4242f22', '9c2244c8a', '4e4439be8', '14c648ea4', 'b69dba164', 'c947361c8', 'b360fa0e4', 'd95c4c322', '8c29246c6', '4d2127328', '2460cc964', '8412fb07a', 'a6e0c2f1e', '243528d1e', 'a0613921e', 'dc62c48e4', '166ca8e4', 'c726c7122', '8d062d6e2', '5b8d3129e', '4cf91115e', '8261b8b0c', '9f7d3929e', 'f20cc96e', '9325e88b0', '71612e334', '80f02aec0', '15425971e', 'c75128bd2', '73dcc8bea', '49f239920', '264547494', 'ce3d2a3c0', '7094e945e', '91f42aec6', 'a58d117a4', '537dbe39e', 'a24c2f0de', 'c85db2cb2', '564af8ca8', '6ef4fcedc', 'bf3df7138', '975d29bca', '57b238ee0', 'ce5db1bd2', '21cd1ba7a', '2029f3932', '8039b346e', 'c0af8de8', 'c471d99e', 'd9c72d3e2', 'c1172f32e', 'de0c29dce', '8a34c2922', '75cf5cee', '87dcf8164', 'caa917d48', '1da0cccee', '5af44a31e', '9225ea09c', 'd313361c8', '93d37946', 'df7cca15e', 'b75db18a0'],
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
  console.log(day, dateDiff)
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