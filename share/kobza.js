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
  wotd_array: ['5dfc20164', 'c067fa164', '7c4d283c6', 'a58d117a4', 'bd25e8b12', 'a66778b9e', '698e28eca', 'c3a912016', 'd313361c8', 'c1f4c4922', '513cce0b4', 'a760cc0de', '33a823c86', '9c87bcf3a', 'd361288b0', '2ec9cd8de', '31d9e0a0', '668d3db9e', '69f429dea', 'be9db8b3c', 'e013a919e', '8e2582ec0', '8e5db8c86', '8c68224fa', '8adeb20f8', '48251332e', '3b60250e4', '301cc2ec6', 'a4a519bca', 'c75128bd2', '5abcf9938', '4aa1325a2', '522123f1e', '37b8c808a', '7ef322dd4', '4445474ac', '1e4242f22', '1460f7086', '59b30d95e', '4f06f9b00', '50aaf1938', '21b82d3ca', 'b40d31268', '9f7d3929e', 'c5f44cb2e', 'ab62fc0f6', '41e122be8', 'd773c74a2', 'c166c73c6', '710c2a486', '2029f3932', 'd44af9edc', '1dc49ef0', '2aa2f0b2e', 'cf06253e2', '2d05a6678', 'c8d991c5e', '4556f9cb2', '2b20ccc86', '5d628b2e', 'be0b276c0', '4c1eee4a2', 'a2fcc34fa', '14a507d36', '190b2d122', '86dda64e4', 'a021256e6', '18e24e08e', '32e9b3122', '5a7308900', '4fe123886', 'cd1b41ec0', '47d347cee', '3c611bea4', 'bbcafcee0', 'ae3cc9c86', '15e7783f2', 'cfc629b0e', '3edd8945e', '80f02aec0', 'dafcf2922', '958cf8934', '892821bf8', '938cc98de', '55272f6c6', '91f42aec6', 'e06823964', '9e72f9ff8', '8322f048a', '25dc969e', '8287bcce4', '5691b8058', '7c34cc848', '955de8b28', 'b256f34b8', '9225ea09c', '51a1b98de', '404afbb84', 'ba7db88de', '2366430e4', '10fccc922', 'c471d99e', '6c20233f0', '4a0f0945e', '6d65cc6c0', 'b933c93a0', '47a9286f2', '39cd1db9e', '1a1d2a300', '71e53126', 'a18d2d30a', 'b5f4f9ec0', 'cc73c24ee', 'a9072f45e', '3e34f8948', 'ad723748e', 'c4e0c9c8a', '57b238ee0', 'd95c4c322', '903528128', '31c4e94fe', '5db84d7a2', '83849f330', '99e041be2', '7aa6c71de', '139268bee', 'a887bc938', 'd2471141e', 'b4a8284e4', '57e92f6f0', '1e859d314', '743325b38', '30684f338', '76c6f3c24', 'bc84563f8', 'de52f0388', '30a137f24', 'a469b73ca', '2b4cfcce4', '9a78cc964', '1326c2a5e', 'd7284d48a', 'c7f44e3ca', '21cd1ba7a', '1f74f04a2', 'ab9cc1964', '222127306', '78602a45e', 'b720c1938', '2a03b33ca', 'a412f88bc', '3474f4c86', 'cbe599b20', '6873c141e', '1632ebf24', '74a02cf08', 'c32a28f9e', '8a573b99e', '14289ecbc', '3b12f7338', '4651234de', '989fe9478', '4cf91115e', '7f8ac88de', '3ce77c164', 'd13d3794e', '9de243798', '55a22f30a', '688d1151e', '9acaf7328', 'ca7c28ec0', 'cc20fcea4', '19ebbe4e4', 'b9319504', '168cf3ece', 'c93cf4ef2', '93c936432', '33c88b4', 'a156f74a2', 'e1323ef8', 'd872f9c8a', 'bc7d2cec0', 'ca3048b9e', '43a12269e', 'd68fb28de', 'b0f249fc6', 'acb2378b8', 'd0a848e9e', '2e33d947c', 'dec6434fa', '1da0cccee', '757d1ba46', '7d742a464', 'da29b73c6', '95f3fa938', 'aad04a464', 'e110cc0de', 'b478f1caa', '6ccaca8de', '35e0f5cb2', 'c63c298de', '437d3fd24', '204c48c80', '4873b2dc6', '38f22a164', '1bca4d330', 'a0f42a45e', '26b0438de', '3bf91de18', '41872a90a', '4d902c0de', 'b967ff6c0', '18cf2c87', '2ea11bd5e', 'd1612d330', '59df1531c', '31962a922', 'b81ccc164', 'abe8cb71e', 'd2224708a', '948d1153a', 'a79c69efc', '35692f322', '410aff30c', 'f744e464', '5ef0f9ec0', 'd60fa32a', 'caa917d48', '6032c8ec0', '584d1141e', '91250e6c6', '17e0f0fc6', 'dd6129dc6', '1346f2c88', 'be512a16e', '8d92f2cb2', '51744e3e6', '614482178', '70073908a', '54b4c0964', 'b7e53217a', '7e1c59618', 'f20cc96e', '62d34979e', '5832ce0de', '31211d942', '79a126a68', '4e5c7322', '8612fc6ca', '75e5133ca', '90cefe08a', '640fc8bd6', '70f309bdc', '6bdfa617a', '362847312', '6491be486', 'de0c29dce', '6a471915e', '11a5924ee', '6322fa324', '24cbb48de', 'a9692c0de', '7a3d2b07a', '3af425f1e', 'ce5db1bd2', '331648e9e', 'd6392190a', '5760238de', '49b244c8a', 'dc62496e', '248d111de', 'bd9aa2b00', '634d17968', 'd0072773a', '8264a3e2', '7320c28de', '86b24832e', '96b52039e', '3669bd0de', '908f21922', '8dc6e971e', 'c85db2cb2', 'c9717946', '8795cdba4', '3f859d3c6', 'a7b0be2', '9ecee7cfa', '625e8de8', 'a61cf9938', 'cfa62c8de', '6a1db1cb2', '15a6c2a5e', 'b1472d322', '9ab33db9e', '89ddbf322', 'b360fa0e4', 'dd8722fd4', '6a6c1be2', '563428ce4', 'c832e661e', '374724cee', '373231424', '6c7448b2e', '3d67b53f0', '885cfa8e4', '48f322be2', '8f7d2016e', '795c2a0de', 'c4211d978', '9c2244c8a', '6ebd3da7a', '49f239920', '83730244e', '1225393a4', '5d3c29f46', '20fcc9dce', '8ea28906', '52f91941e', '1a9e62178', 'b1d528d1e', '5e9cc2c86', '45cc2d0de', '2972374b8', 'd678286c6', '1df3b8ca0', '5cb3c941e', '72f9b8e5e', '92e8288de', '2f821bca', '907912170', 'c34c2d4a2', '8ea6f4922', '80a22f0de', 'a4ddbe5cc', '44b91279e', '82cc401de', 'aa39283d2', '65bcc308a', '387c21938', '6af9b51c8', '95133979e', '61e229938', '1f86fd124', '5e52f9cb4', '73bd379a4', '46a24f0b2', 'a9854217a', '60c438bc0', '9e8724926', '1e3917972', '9325e88b0', '4e2438bc0', '526121922', '77e97e126', 'c1172f32e', 'aa5db83e8', 'c263b2c86', '1c6229c8a', '7f45c7322', '6ef4fcedc', 'bbb423cee', 'c726c7122', '9173c2168', '9d2f1c8a', '98702e0e4', 'b8e82e6c0', '3a344e6f2', 'de942e322', '5b272d0de', 'c8be51922', 'aee0f8964', '67471dce4', '14c648ea4', '4ef3a171e', '53b238bfc', '6dd5a1464', 'd97110f8', '591cf4c8a', '40d0ce0de', '37caf88b0', '150f1daf8', '84e8c88de', '69702abc6', '34d85aee2', 'b00b2aec6', 'c45719178', '2562cac86', 'c20c5dd1e', 'c7a82aec0', '620629c8a', '3435bc8de', '7ca4a08c', '27a0f98e4', 'af8d29f56', 'd8b2fe6e2', 'baa7b80de', '77951be46', '8b7528dc6', '17643117a', '7a7fe16e', '68ddb330a', '74f221964', '3da43cee8', 'cda04cf24', 'e0e9bc8e4', '961db9b38', 'c2b3a94de', '9bb37b3a4', '50cb2cb00', '64d2fcb3c', '368aff322', '1f24323ca', '844838bca', 'b0aa4e48a', 'e65c207a', '4092f86f8', '7066c0900', '58e13639e', '8fde30b2e', 'a5e04cec6', '6f2e3967a', 'a0613921e', '54d4f1922', '88f3cdcfa', '7d9db98de', '2283b299e', '65304cf3a', 'a24c2f0de', 'c1b1b8b9e', '8039b346e', 'bae128900', '2fbcfc486', 'ad20c4964', '995cf988a', '11e02899e', 'df7cca15e', 'dd06f84ee', '852fa0b4', 'bcc321b38', 'db6438b34', '768f25922', 'a320f0486', '4f8e48ed6', '6da125328', '940bbe0de', '880645b22', 'c9a22832e', '87dcf8164', '9a0d298de', 'd3f1de78', '4e4439be8', 'fe7783f2', '430acc6ee', 'a229b7164', 'b611925e', '85e12a6d4', '66e042be6', 'b866ca122', 'a3b82d79e', '8f8e57c32', '2cbc25922', '5972ebf1e', 'b222ca148', '1c8afe5c6', '991f71d48', '74689d99f', '4022c48de', '727c28d1e', '852d1267a', '564af8ca8', 'ac5e1e106', '35a6c81c8', 'd90af86f2', '8174f2f04', '67e0fa4e4', '64462d6f2', 'ced3e8cae', 'ccce7cf9', '6d27b3bc0', 'b04fb5c8a', 'd6f4f5b2e', '243528d1e', '491db8bd2', '111db396e', '390c42cb4', '420cf2d2b', '607248b2e', '88ae5e3e2', '571d01646', '65f249ad8', '1bb4f332e', '44729b22', '849428e9e', '7ff5fccd8', 'cb25060de', '8d062d6e2', '5c3cf3138', '2bc62516e', '8b8d2cf2e', 'b667b80e4', '6084973e2', '7712f330a', '2ba929be2', '25cf3794c', '9e32a269e', '71cc298e4', 'a2a3bf3c6', 'c0d2f9618', '947cc00de', 'a46c2a5e', '2842c9ec0', 'c5212732e', '5d4547ce4', 'c033c95c6', '28e124922', '26f2fd6c0', '9fb4f2b2e', '186243f1e', 'b513a7cc4', '8a873269e', 'd98629f78', '4d2127328', 'b69dba164', '2932238de', '56e6f496e', 'c2fcc98de', '7b9d8215e', 'caf33214c', '44058217a', '3a8d3d95e', '1152fd32a', '214e3951e', '8ed2fd322', '34729bea', '966025ec6', '99a11265e', 'ab52e6dc', '72b9b530e', '3b928f9e', '7b38f2c86', 'd4e129b32', '537dbe39e', 'cf6129ff2', 'c947361c8', '1967bd3ca', 'a716f9f4e', '1b5d09444', '182eeda08', 'a1e9271c8', 'b2e117ba4', 'd8212a09c', '38a12f0b8', '32a2cc164', 'ce86fe4a8', 'd5df91938', 'df3928b06', 'dc16c18b2', '166ca8e4', 'c68acb8e4', '629c2cec6', '5893a615e', 'ddd31be1e', 'ad9db38de', '4cfd092', '9b0dba0e4', '4ca84888a', 'a08d1797a', '9fd316678', '4de32d3ca', '8cb9195ca', 'bf9892c9c', '6b564e6ce', '34b4c2938', 'e9d09eca', '5b62438de', '96f23979e', '20a55d95e', 'b3c7194fa', '258afc4b2', 'd28fb2c86', '4b872a95e', 'ade92e6c6', '65c4c95e', '6d2e7f36', '4b692f448', 'eca4f32a', 'ae8712524', '43dc69458', '9ce6cd2de', '7d05c261e', '1fdc2cf1e', '545242b38', '6817218b2', '12ca4d3ec', '77573794c', '7f20433f2', '6e34f48b8', '4a4629922', 'a54fb5922', 'b292fc332', 'b787228b2', '81cb28e9e', '4f602cf24', 'b9cc595c6', '722bb8c86', '3a43b8c92', '8f285beb6', '981c48f3a', '3f12f74a8', '6f7825cee', '503322938', '2f664d0a2', 'bde3b19de', 'b6e6c76c0', '164af8d36', 'acc24a45e', 'ccf5277b6', '737429bf8', '5e39280de', '42f321938', 'ce3d2a3c0', '9646dd1e', 'b328c70de', 'a8dcca8de', '81b2256c0', 'b4d739418', '2fdcce122', '7cb3a119e', '529f1188e', '7ea22c0de', '458e28c1e', '231cc4c86', 'df9c24ca6', 'd3b12f338', '3360c9cb8', '4af2fe6ca', 'b1b2e6564', '9366cd7a4', '78b4f5b0a', '7e6468b14', '2460cc964', '3b87f7138', 'b56a5d86e', '78e13df1e', '1addc629e', '870620ec0', '5af44a31e', '9b4ee207a', '97a8ca8de', '5f46f34a2', 'b8a1bb8de', '1ce6f1900', 'e0a12710a', '4bd3651e', 'c562400de', '30f3f6f1e', '264547494', '27d736478', 'c9c6fd30a', '8412fb07a', '9f25e8b00', '71b8288de', '73dcc8bea', 'a52029f72', 'c0af8de8', '2d712710a', '6c88b64a0', '9c65a24de', '474e21bf0', '10bccc922', '71612e334', '9192fc89c', '7df3c2006', '1ee0c3bc6', '9d4450b2e', 'aff32e0de', 'b112f86f2', 'dcfc4e48a', 'ac1cca08a', '8987194ee', '6739196bc', '6196233f2', '5cdc69444', '5c6041ce4', 'd40728e9e', '2a73c615e', '554c2cbe2', '8b22448b2', '6395be464', '51d4f8e24', '4706fcee2', '3e9249f42', '7659986f8', '924eccf3a', '3f307f36', '6e632a6f0', '26182a100', '7094e945e', 'a6e0c2f1e', '6b1db6a68', '10471627a', '3fe91939e', '8bc72832e', 'dfe6c1922', 'd19d1951e', '3c8592ec0', '2cc6283ea', '5fdd9b8e4', '504fc7958', '2b4f0548', '8b322848', '239c39be8', '5412fcb1c', '9738f1e58', 'c3de38ee6', '4963bcbc6', '17b04899e', '61072f25e', '188a453c0', '92904f338', '5b8d3129e', '63de56224', '8952ff300', 'd573c74a6', '790afe5cc', '8079b8bca', 'd4a2ca164', '35352a95e', 'bc282d0de', 'd53de78', '3f6da2ec0', '326123086', '1d65924ee', '277242bf8', '4c619d95e', 'faa5db9e', '314d1925e', '283d228b2', '874c27964', '75cf5cee', 'b10fcf2e', '2af238bfe', '4154e6678', 'c4a9b9922', 'b5a8c761e', '22048f36', '5f985e6f4', 'bee5ed30a', 'bb1cccf3a', '29b4ce0de', 'dab2fd7a4', '8d733119e', 'cbb3c7c48', '4bf2cd0de', '9be13973a', 'ab16f1b22', 'd9c72d3e2', '322bb9938', '45342e164', '93d37946', '75b845164', '16d73fb68', 'dca221bdc', 'a69d99b28', '1c22ca16e', '22d722d3e', '4b25e8ef2', '17213673a', '654cccf3a', '2c66cc8de', 'c09712170', '25071dcfa', '2f3d1648e', '399e3e6dc', '66124896e', 'd0692d10a', 'ac221bf8', '538f9f46', '5a3307a74', '11c82178', '83e0fcedc', '23f4fcf3a', 'dc62c48e4', 'c64728998', '9a82896e', 'a7d2ff30c', '6f95a64fa', '46ddc8cac', '97e542bc6', 'd51db8b12', 'a8791141e', '94d528900', '6fe4560f2', 'c599af6e2', 'd7d4edcee', 'cdd999bf4', 'd8e8f9930', '55e3233f0', 'ccb241f1e', 'bf3df7138', '13f1bcce4', 'bf73200de', 'bd4c49b00', '8cdd21be6', 'd7bc28e5e', '8261b8b0c', '2d86f7122', '9d9dbd322', '36e1cd86e', '420fe324', 'b392fd486', 'b9b337fa4', 'da4f08cb8', '5f0d25c48', '2133a2470', 'd3e848f98', 'a3d8e8ef8', 'dbbcc34b4', '7cddb83f2', '5bc2280e4', 'd2ccca164', '3d22c7148', 'a3612e5cc', '3c25e73e6', 'db2f92ec0', 'af78ff08a', 'ae73be464', '1993493aa', 'a83cc9938', '975d29bca', '7af9b8bea', '79e12f306', 'd0f3703a4', '8c29246c6', 'bff4f8964', '66692cf6c', 'cd65e8bd2', 'c6d7288b4', '56f9217a', '2de6cc79e', '6bb2fc486', '1d133639e', '4e8c2c164', 'be53216e', '3dd529880', 'a24f4ef2', '8205a64e4', '530acd0de', '69289730a', 'a9d3a6678', '8646f84b8', '7805e919e', 'dbddc261e', '6242434de', '4d75b38de', '383d1917a', 'cb4e2d122', 'ba3244bf4', '2c212f300', '33c6c9922', '762469de8', '67aa283ca', '6abcf9c8a', '428a2e464', '2244e2454', '7a4d28b14', 'd1d33db9e', 'aab4f292a', '1246fc0a2', '15425971e', 'b63842ca2', 'af16fb972', '397d36524', '7b7921be2', '858727328', 'b75db18a0', '58e3645e', '1a7cf2c8e', '1b13a939e', '8a34c2922', '2721be148', 'a11e30ed2', 'd5a95781c', '3e73a1258', '8116c8e9e', '751feddc6', '29e12d6da', '46333641e', '12b128f2e', '100c42b00', '8565e9b06', '28b321b26', '489db5328', '98d73945e', '53e728094', '9d384c32e', '2e6223b00', '44e2fa1c8', 'bb72324ee', '4265e2478', '7bf4238de'],
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
  const currentURL = window.location.href;
  // Create a new URL object from the current URL
  const url = new URL(currentURL)

  // Use URLSearchParams to get query parameters
  const queryParams = url.searchParams


  // Now you can access individual query parameters by name
  const encoded = queryParams.get('word').replace(/-/g, '+').replace(/_/g, '/');
  const decodedString = atob(encoded)

  const utf8DecodedString = new TextDecoder("utf-8").decode(Uint8Array.from(decodedString, c => c.charCodeAt(0)))

  console.log(url, queryParams, encoded, decodedString, utf8DecodedString)

  Wotd.word = utf8DecodedString
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
    root.$emit('showLongPopup', 'вітаємо! ви вгадали слово! встановіть додаток, щоб викликати на реванш')
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
    let guesses = []

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
        // localStorage.setItem(State.buildPoolKey(), JSON.stringify({guesses: this.guesses}))
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
        this.$root.$emit('showLongPopup', `На жаль, вам не вдалось вгадати слово. Розгадкою було "${Wotd.word}".`)
        this.$root.$emit('failure')
        logEvent('game_failed')
      }
    },
    duelShare() {
      let utf8Text = ""
      for (let letter of this.guesses[this.currentGuess].getLetters()) {
        utf8Text += letter.char
      }

      // Encode the text to Base64
      const base64Text = btoa(unescape(encodeURIComponent(utf8Text)));

      // Make the Base64 URL-safe
      const urlSafeBase64Text = base64Text
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const currentURL = window.location.href;
      // Create a new URL object from the current URL
      const url = new URL(currentURL)

      // Update the query parameters
      url.searchParams.set('word', urlSafeBase64Text);

      // Redirect to the modified URL
      window.location.href = url.href;
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
    this.$root.$on('duelShare', function() {
      this.duelShare()
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
    <duel></duel>
    <div class="pointer h2 w2 ba br4 white-80 b--white-80 tc v-mid fl f4 fw6 pa1" v-on:click="showTutorial">?</div>
  </div>
  `
})

Vue.component('duel', {
  data: function() {
    return {
      word: Wotd.word
    }
  },
  template: `
    <div class="f5 fw1 white-70 fl">
      Ви розгадуєте слово: {{word}}

      <duelbutton></duelbutton>
    </div>
  `
})

Vue.component('duelbutton', {
  computed: {
  },
  data: function() {
    let display = true
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
      this.$root.$emit('duelShare')
    }
  },
  template: `
  <div class="mt2 h2 w4 f4 tc ba b--white br2 white center" v-on:click="share">
    закодувати
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