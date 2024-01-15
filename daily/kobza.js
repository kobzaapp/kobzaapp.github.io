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
  wotd_array: ['26f2fd6c0', 'bc282d0de', '981c48f3a', '5bc2280e4', '3c25e73e6', '31962a922', '1632ebf24', '2244e2454', '383d1917a', '14a507d36', 'aee0f8964', 'caa917d48', 'aff32e0de', '7659986f8', '40d0ce0de', '24cbb48de', '1993493aa', '7b9d8215e', '8205a64e4', '5e52f9cb4', 'd3b12f338', 'd7284d48a', '71612e334', '13f1bcce4', '399e3e6dc', '2366430e4', 'c63c298de', 'a83cc9938', '7d05c261e', 'a11e30ed2', '892821bf8', '4e4439be8', '7ef322dd4', '44b91279e', '30f3f6f1e', '874c27964', '78602a45e', '8e2582ec0', '99a11265e', 'c9717946', '98d73945e', '8b22448b2', '5d628b2e', '4b25e8ef2', 'ab52e6dc', 'ce5db1bd2', '8795cdba4', '7b38f2c86', '3a8d3d95e', '9192fc89c', 'ba7db88de', 'd60fa32a', 'b0aa4e48a', '65bcc308a', '55e3233f0', 'cb25060de', 'bde3b19de', '9e32a269e', 'ccb241f1e', '2a03b33ca', 'd97110f8', '283d228b2', '91f42aec6', '139268bee', 'b56a5d86e', '26b0438de', '8079b8bca', '1f24323ca', 'e1323ef8', '16d73fb68', '64d2fcb3c', 'b392fd486', '6d2e7f36', 'cf6129ff2', '46ddc8cac', '97e542bc6', '81b2256c0', '44058217a', '2a73c615e', '2721be148', 'b112f86f2', '420cf2d2b', 'd7bc28e5e', '503322938', '3ce77c164', '6ef4fcedc', '166ca8e4', '995cf988a', '751feddc6', 'd2224708a', '2b4cfcce4', 'cfc629b0e', '83e0fcedc', '50aaf1938', '1bb4f332e', '4a0f0945e', '10471627a', 'a3b82d79e', 'c4211d978', 'd53de78', '29e12d6da', '3d67b53f0', '2fdcce122', 'c9c6fd30a', '1a7cf2c8e', '4bd3651e', '938cc98de', '6242434de', 'ba3244bf4', '9646dd1e', 'a8791141e', 'bb72324ee', '522123f1e', '6d27b3bc0', '44e2fa1c8', '39cd1db9e', '620629c8a', 'd313361c8', 'be0b276c0', 'b9cc595c6', '7805e919e', 'b00b2aec6', '6d65cc6c0', 'd4a2ca164', '3af425f1e', '1152fd32a', '4fe123886', '59b30d95e', '9225ea09c', '49b244c8a', 'a2a3bf3c6', 'd0a848e9e', '2af238bfe', 'bff4f8964', 'dd8722fd4', '2f3d1648e', 'eca4f32a', 'd5a95781c', 'c947361c8', 'cdd999bf4', '6739196bc', '72b9b530e', '9e72f9ff8', '3bf91de18', '8dc6e971e', '947cc00de', '188a453c0', '6dd5a1464', '8f7d2016e', '80f02aec0', '504fc7958', '4c619d95e', '5f46f34a2', '73dcc8bea', '88f3cdcfa', 'ab9cc1964', 'b9319504', '190b2d122', '4a4629922', '5db84d7a2', '32e9b3122', 'b75db18a0', '762469de8', '2133a2470', '6a1db1cb2', '66e042be6', '1bca4d330', 'a887bc938', '4cfd092', '9b4ee207a', '9b0dba0e4', 'c09712170', 'b9b337fa4', 'd0072773a', '214e3951e', 'ab16f1b22', '2f664d0a2', '1a9e62178', '4651234de', 'b40d31268', 'e0e9bc8e4', 'a7b0be2', 'af8d29f56', 'd3e848f98', '9e8724926', '3edd8945e', '9a78cc964', '8b322848', '8bc72832e', '10bccc922', '301cc2ec6', '1ce6f1900', '629c2cec6', '6e34f48b8', 'f20cc96e', '4cf91115e', '48251332e', '12b128f2e', 'c832e661e', '2d712710a', '2d05a6678', '67aa283ca', '563428ce4', '530acd0de', '948d1153a', '264547494', 'dca221bdc', '182eeda08', 'acb2378b8', 'a54fb5922', '4ca84888a', '78b4f5b0a', '41e122be8', '2cbc25922', '3474f4c86', '7a4d28b14', '6c20233f0', '27a0f98e4', '74a02cf08', 'ad9db38de', 'c7f44e3ca', 'b1d528d1e', 'ca3048b9e', '58e13639e', '8039b346e', 'bae128900', '362847312', 'b5a8c761e', '844838bca', '614482178', 'b478f1caa', '737429bf8', '8a34c2922', 'bb1cccf3a', '96b52039e', '83849f330', '7e1c59618', 'af78ff08a', '71cc298e4', '2460cc964', 'c20c5dd1e', '57e92f6f0', '6bb2fc486', '2932238de', '2029f3932', 'd28fb2c86', 'd40728e9e', '204c48c80', '5fdd9b8e4', '8174f2f04', '5d3c29f46', '35e0f5cb2', '491db8bd2', '100c42b00', 'a46c2a5e', 'd0692d10a', 'df7cca15e', '8565e9b06', '6a6c1be2', '3a43b8c92', '6491be486', '19ebbe4e4', '5412fcb1c', '9de243798', '654cccf3a', 'd361288b0', 'b292fc332', '5c3cf3138', '5c6041ce4', '31d9e0a0', 'da4f08cb8', 'ab62fc0f6', '8cdd21be6', 'b933c93a0', 'c75128bd2', '8a873269e', 'd19d1951e', '72f9b8e5e', '404afbb84', '991f71d48', '2972374b8', '168cf3ece', '94d528900', '4b872a95e', 'd2471141e', 'bf73200de', '54b4c0964', '9ecee7cfa', 'a08d1797a', 'e110cc0de', '18cf2c87', '71b8288de', '5f0d25c48', '7c4d283c6', '6395be464', '84e8c88de', 'c45719178', 'acc24a45e', '870620ec0', '33c88b4', '22d722d3e', '45342e164', '1c22ca16e', 'bbb423cee', '7066c0900', '11a5924ee', 'baa7b80de', '17213673a', '1e3917972', 'd98629f78', '7bf4238de', '7aa6c71de', '258afc4b2', '849428e9e', '3f12f74a8', '8612fc6ca', '6f2e3967a', '95133979e', 'c34c2d4a2', 'c263b2c86', 'c5f44cb2e', '6f95a64fa', '66124896e', 'ae3cc9c86', '4265e2478', '3da43cee8', '538f9f46', 'c8d991c5e', '8261b8b0c', '2de6cc79e', '56e6f496e', '4706fcee2', 'faa5db9e', 'da29b73c6', '7d742a464', 'b5f4f9ec0', '8fde30b2e', '2f821bca', '83730244e', '75cf5cee', '885cfa8e4', 'bcc321b38', 'c4a9b9922', '625e8de8', 'a2fcc34fa', '7f45c7322', 'dec6434fa', '397d36524', '65c4c95e', '98702e0e4', '20a55d95e', '70073908a', '8ea28906', '8987194ee', '880645b22', 'c52e5e6c6', '31c4e94fe', 'b720c1938', '410aff30c', 'bbcafcee0', '1da0cccee', '2ea11bd5e', '34d85aee2', '9c87bcf3a', '3b12f7338', '975d29bca', '3c8592ec0', '5e9cc2c86', 'b8a1bb8de', 'db6438b34', '27d736478', 'c85db2cb2', '164af8d36', 'b4a8284e4', '6a471915e', '8ed2fd322', '9d384c32e', '56f9217a', '9d4450b2e', '5893a615e', 'bf3df7138', '6f7825cee', '28b321b26', '5abcf9938', 'd1612d330', 'd773c74a2', '86b24832e', 'ae8712524', 'b04fb5c8a', '48f322be2', '93c936432', 'c1f4c4922', 'dc62496e', '4bf2cd0de', '61072f25e', '420fe324', '8f285beb6', '458e28c1e', 'd8e8f9930', '67471dce4', '9366cd7a4', '9a82896e', 'be53216e', '1f74f04a2', 'dafcf2922', '93d37946', 'c2fcc98de', '8f8e57c32', '42f321938', '92e8288de', '9c2244c8a', '8646f84b8', 'c166c73c6', '1df3b8ca0', 'b1b2e6564', '8d062d6e2', '78e13df1e', 'c1b1b8b9e', 'd2ccca164', '3360c9cb8', '60c438bc0', 'ac221bf8', '390c42cb4', '6873c141e', '571d01646', '5f985e6f4', '8adeb20f8', '9a0d298de', '326123086', '9be13973a', '5cb3c941e', '17b04899e', 'b967ff6c0', 'd5df91938', '75b845164', '1e4242f22', '1e859d314', '9c65a24de', '1ee0c3bc6', '5691b8058', '1326c2a5e', '2283b299e', '591cf4c8a', '634d17968', 'be9db8b3c', '3b60250e4', '3f859d3c6', 'ad723748e', '940bbe0de', '35352a95e', '52f91941e', '21b82d3ca', '79a126a68', '4c1eee4a2', 'af16fb972', 'b667b80e4', '607248b2e', '9d9dbd322', '4154e6678', '111db396e', 'a3d8e8ef8', '25071dcfa', '8412fb07a', '668d3db9e', '54d4f1922', 'cd65e8bd2', '18e24e08e', '903528128', '62d34979e', 'c4e0c9c8a', '222127306', 'b866ca122', '1967bd3ca', '5a3307a74', '5b8d3129e', '698e28eca', '64462d6f2', 'de0c29dce', '7a7fe16e', '8ea6f4922', '1a1d2a300', 'a156f74a2', '9325e88b0', '23f4fcf3a', '6bdfa617a', '50cb2cb00', '77573794c', '8d92f2cb2', '86dda64e4', '77e97e126', '11e02899e', 'df3928b06', '46333641e', '3d22c7148', '14c648ea4', 'd9c72d3e2', 'cbb3c7c48', '1dc49ef0', 'a3612e5cc', '907912170', 'ca7c28ec0', '1b5d09444', '2aa2f0b2e', '22048f36', 'b256f34b8', 'e013a919e', 'c067fa164', '7a3d2b07a', 'b513a7cc4', '4873b2dc6', '7cddb83f2', '768f25922', '430acc6ee', '6ebd3da7a', '20fcc9dce', '428a2e464', 'abe8cb71e', '69289730a', '368aff322', '1f86fd124', '4ef3a171e', '53b238bfc', '710c2a486', '6ccaca8de', '564af8ca8', '3669bd0de', 'f744e464', '15e7783f2', 'b69dba164', 'a6e0c2f1e', '150f1daf8', '5af44a31e', '7ca4a08c', '2b4f0548', 'b787228b2', '9ab33db9e', '955de8b28', 'cc73c24ee', '2e6223b00', '4d2127328', 'b8e82e6c0', '3f6da2ec0', 'cfa62c8de', 'c2b3a94de', 'a66778b9e', '4e5c7322', '25cf3794c', 'd573c74a6', 'e9d09eca', '99e041be2', '7df3c2006', '474e21bf0', 'de52f0388', '7f8ac88de', 'b81ccc164', '63de56224', '15a6c2a5e', '41872a90a', 'b3c7194fa', '4e8c2c164', '90cefe08a', 'bd9aa2b00', '10fccc922', '4b692f448', '32a2cc164', '3b87f7138', '8a573b99e', '21cd1ba7a', 'b2e117ba4', 'ccce7cf9', '790afe5cc', '1c8afe5c6', '67e0fa4e4', '81cb28e9e', '7c34cc848', 'a412f88bc', '243528d1e', '1346f2c88', '526121922', 'c64728998', '3b928f9e', '5760238de', '8c68224fa', 'dbddc261e', '2b20ccc86', '331648e9e', 'be512a16e', '89ddbf322', '961db9b38', '966025ec6', 'dcfc4e48a', '5832ce0de', 'd6392190a', '65304cf3a', '722bb8c86', '1460f7086', 'd3f1de78', 'ddd31be1e', 'b328c70de', '1addc629e', '49f239920', '4f06f9b00', '5b62438de', '6084973e2', '545242b38', 'dab2fd7a4', '489db5328', '88ae5e3e2', '35692f322', '4556f9cb2', '2fbcfc486', '1d133639e', 'd95c4c322', '45cc2d0de', 'a5e04cec6', 'a320f0486', 'c9a22832e', '9fb4f2b2e', '314d1925e', 'd6f4f5b2e', '51a1b98de', '3e73a1258', '33c6c9922', 'a18d2d30a', '7ea22c0de', '65f249ad8', 'cb4e2d122', '26182a100', 'ac1cca08a', 'a9072f45e', '17e0f0fc6', '1d65924ee', '7af9b8bea', 'a24c2f0de', 'a9854217a', '35a6c81c8', 'c3a912016', '1225393a4', '743325b38', 'bd25e8b12', '908f21922', '69702abc6', '97a8ca8de', '858727328', '53e728094', 'a9692c0de', '3a344e6f2', 'cc20fcea4', 'b6e6c76c0', '852fa0b4', '74f221964', 'c0d2f9618', '924eccf3a', 'dc16c18b2', 'ad20c4964', 'a24f4ef2', '2562cac86', '3fe91939e', '374724cee', '6af9b51c8', 'c6d7288b4', 'b7e53217a', '4d902c0de', '5ef0f9ec0', 'a4ddbe5cc', 'b63842ca2', 'ac5e1e106', 'dd06f84ee', 'c7a82aec0', '69f429dea', '59df1531c', '30684f338', '4aa1325a2', '12ca4d3ec', '8c29246c6', '4445474ac', '9fd316678', '31211d942', 'b0f249fc6', '95f3fa938', 'de942e322', '7e6468b14', '91250e6c6', 'ae73be464', 'a58d117a4', '2c212f300', '5e39280de', '43a12269e', '3435bc8de', '958cf8934', 'd68fb28de', 'a716f9f4e', 'd51db8b12', 'd4e129b32', '529f1188e', 'a69d99b28', '7712f330a', '248d111de', 'a61cf9938', '17643117a', '66692cf6c', 'c0af8de8', 'b10fcf2e', '322bb9938', '51d4f8e24', '37caf88b0', 'aa5db83e8', '5d4547ce4', '852d1267a', 'caf33214c', 'e06823964', '8952ff300', '47d347cee', '14289ecbc', '96f23979e', 'aa39283d2', '7094e945e', 'ce86fe4a8', 'a0f42a45e', 'ce3d2a3c0', '757d1ba46', '6da125328', 'bd4c49b00', '6abcf9c8a', 'a9d3a6678', '68ddb330a', '8d733119e', '9173c2168', '387c21938', 'aab4f292a', 'bc84563f8', '6322fa324', 'e0a12710a', '76c6f3c24', '9ce6cd2de', '36e1cd86e', '6196233f2', '5b272d0de', 'cbe599b20', 'd90af86f2', 'd8b2fe6e2', '6fe4560f2', '82cc401de', 'a229b7164', '3e34f8948', '5dfc20164', '46a24f0b2', '77951be46', '239c39be8', '5a7308900', '74689d99f', '4de32d3ca', 'e65c207a', 'bc7d2cec0', 'a4a519bca', '373231424', '79e12f306', 'db2f92ec0', '1c6229c8a', '4d75b38de', '6c88b64a0', 'd13d3794e', '5cdc69444', 'a52029f72', 'a469b73ca', '3c611bea4', '2cc6283ea', '537dbe39e', 'c599af6e2', 'dbbcc34b4', '7320c28de', '4e2438bc0', '8cb9195ca', 'd7d4edcee', '5972ebf1e', 'a0613921e', '7cb3a119e', '3f307f36', '3dd529880', '25dc969e', '55272f6c6', 'c1172f32e', 'b4d739418', 'a021256e6', '3e9249f42', '85e12a6d4', '2ec9cd8de', 'dc62c48e4', '7f20433f2', 'c68acb8e4', '9acaf7328', 'a760cc0de', 'c033c95c6', 'c8be51922', '4022c48de', 'd678286c6', '87dcf8164', '1246fc0a2', '6b564e6ce', '186243f1e', '38f22a164', 'c3de38ee6', 'b360fa0e4', '7b7921be2', '2d86f7122', 'c32a28f9e', '29b4ce0de', '437d3fd24', 'df9c24ca6', '92904f338', '9bb37b3a4', '57b238ee0', 'ced3e8cae', '34b4c2938', '4963bcbc6', 'c562400de', '80a22f0de', '44729b22', 'd44af9edc', 'ade92e6c6', 'cd1b41ec0', '2e33d947c', 'c93cf4ef2', 'c726c7122', 'd1d33db9e', '43dc69458', '2ba929be2', '30a137f24', '584d1141e', '231cc4c86', 'b611925e', 'd8212a09c', 'cf06253e2', '15425971e', 'a1e9271c8', 'ccf5277b6', '2c66cc8de', '33a823c86', '7ff5fccd8', '1fdc2cf1e', '51744e3e6', 'b1472d322', '38a12f0b8', '727c28d1e', '554c2cbe2', '2842c9ec0', '75e5133ca', 'bf9892c9c', '47a9286f2', '6e632a6f0', 'a8dcca8de', '4092f86f8', '8b8d2cf2e', 'bee5ed30a', '70f309bdc', 'a7d2ff30c', '9738f1e58', '37b8c808a', '55a22f30a', 'fe7783f2', 'd0f3703a4', '6817218b2', '6c7448b2e', '8287bcce4', '71e53126', '4f602cf24', '2bc62516e', '9f25e8b00', '7d9db98de', '58e3645e', 'a79c69efc', '8264a3e2', '61e229938', '513cce0b4', '277242bf8', '8b7528dc6', 'dd6129dc6', '4f8e48ed6', '989fe9478', '34729bea', 'c471d99e', 'b222ca148', '6032c8ec0', 'd872f9c8a', '9d2f1c8a', 'aad04a464', '688d1151e', '8e5db8c86', '11c82178', 'dfe6c1922', '8322f048a', '4af2fe6ca', '6b1db6a68', '73bd379a4', '795c2a0de', 'cda04cf24', '9f7d3929e', '8116c8e9e', '640fc8bd6', '1b13a939e', '28e124922'],
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

    <p>що робити вам? спробуйте встановити <a href="https://kobzaapp.github.io" class="white">мобільний додаток</a> або вгадати випадкові слова <a href="https://kobzaap.github.io/random" class="white">за оцим посиланням</a>.</p>
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