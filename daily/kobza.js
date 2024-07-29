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
  wotd_array: ['d40728e9e', '9f25e8b00', 'd98629f78', '3e73a1258', 'c0d2f9618', '9325e88b0', '18bfcc016e', '170664abc6', '10329bd486', '10549e94de', '11712fd138', '331648e9e', 'cb4e2d122', 'dd8722fd4', 'a58d117a4', '9c87bcf3a', '13d2afe6c0', '30684f338', '940bbe0de', '1014a4d49c', '3b87f7138', '64462d6f2', 'a83cc9938', '9e8724926', 'ed9da6678', '1239cc015e', '17768e2458', '1112242f1e', 'dfe6c1922', '67e0fa4e4', '458e28c1e', 'fc5d4217a', 'e974ca5c6', '2aa2f0b2e', '3af425f1e', 'a7d2ff30c', 'fc0b2cec6', '1559e3e4a2', '1807842b32', '26b0438de', 'a229b7164', '6d2e7f36', '15f8628bea', '11a54fc8d8', '41e122be8', '907912170', '20fcc9dce', '155459fd36', 'f47c29bf8', '15d552d0b8', '1993493aa', 'f6b8238de', 'f18af0b2e', '8c29246c6', 'e719423e6', '858727328', '5f46f34a2', '2244e2454', '6c7448b2e', '16bdd29f78', '13c71bcf24', '20a55d95e', '4fe123886', '948d1153a', 'b933c93a0', 'acc24a45e', '25cf3794c', '9366cd7a4', '4e4439be8', '99a11265e', '15e7783f2', '191542a6c0', '11c82178', '2366430e4', '13e4d37d3a', 'e6611be9e', 'f8322a3c6', '6196233f2', '10cb3b5c8a', 'ac221bf8', 'b4a8284e4', '10bf4ce4de', '1618509edc', 'd573c74a6', '158eb1207a', 'af78ff08a', '2f3d1648e', '1051717c08', 'a0f42a45e', 'e110cc0de', '12f8afa32e', 'f0b3be048', '14926fc88a', 'bcc321b38', '8c68224fa', 'c166c73c6', 'ffb9733e2', '13f8ccb15e', 'e0e9bc8e4', '19034fe16e', '383d1917a', 'f34e49bc6', 'b360fa0e4', '17485a939e', '4706fcee2', 'b611925e', '15a4acd6c0', 'cf06253e2', '15ac3b5c5e', '17567b488a', '188f828948', '101e2f4cb4', '314d1925e', 'd6f4f5b2e', 'e76e613e2', '727c28d1e', '1768fad99e', '2d05a6678', '12ab04897a', '8b322848', '14ac6284a6', '5af44a31e', 'bb72324ee', '947cc00de', '12322f2c86', '4c1eee4a2', '10b16488b4', 'b40d31268', 'caa917d48', '1947231724', 'bbb423cee', '119f3b2b00', '322bb9938', '1713d2cdc6', '32e9b3122', '1628711724', '78b4f5b0a', '158662ac86', 'b256f34b8', '4265e2478', '81b2256c0', '8f8e57c32', '13bd3e88ae', '264547494', '16d73fb68', '193c577148', 'a11e30ed2', '34729bea', 'e285c969e', '2cbc25922', '16d222695e', '16ea1b715e', '18825e5328', 'b69dba164', '17612f5328', 'a3b82d79e', '3c611bea4', '504fc7958', '654cccf3a', '2ec9cd8de', '1d65924ee', 'a021256e6', '18f65e330a', '148722196e', 'b720c1938', '16aa12c8a8', 'c4e0c9c8a', '126ccca45e', '8b7528dc6', 'd90af86f2', '10a20c571e', '72b9b530e', '10b983915e', '2e33d947c', '4a4629922', 'aa5db83e8', '961db9b38', '12ba2fa6c0', '171b2f8122', '177aa200de', 'f17cc34b2', '16a1cc4bea', '2f664d0a2', 'ee74ccf24', 'da4f08cb8', 'faa5db9e', '181e5eaeca', '4651234de', 'cdd999bf4', '66692cf6c', '2c66cc8de', '109f44f4d8', '1367d1916e', '5893a615e', '75cf5cee', '74f221964', 'a1e9271c8', '5e9cc2c86', '81cb28e9e', '174cfc7ea0', '537dbe39e', '35352a95e', '18ea5ed322', 'd1612d330', '3da43cee8', '2932238de', 'abe8cb71e', 'a61cf9938', '98702e0e4', '13834f1938', '2fdcce122', 'f84717a08', '144b33fd1e', '7c34cc848', '79e12f306', 'de0c29dce', '14465a9938', '129a6c33a4', 'b8a1bb8de', 'af16fb972', '1c6229c8a', '9acaf7328', 'c726c7122', 'c3de38ee6', 'cd1b41ec0', '173ace2894', '2a73c615e', '11e62cc0de', '1160d1179e', '6084973e2', 'ec79733f0', '10aa0fcc86', 'df7cca15e', '35a6c81c8', '1870cf4c8a', '908f21922', '13285c8cac', '1152fd32a', 'a9854217a', 'fd02c8486', '3474f4c86', '6bdfa617a', '99e041be2', '1655d47ce4', 'c1f4c4922', '9646dd1e', '7e1c59618', '154cd17978', '148b02e164', '5412fcb1c', '12a38ff4e4', '24cbb48de', '1687336424', '584d1141e', '15f0fc10de', '955de8b28', '17526400de', 'd0f3703a4', 'd678286c6', '6395be464', '6bb2fc486', '17fc728be6', '100c42b00', '53b238bfc', '12ae0f88b2', '12585edf1e', '7cddb83f2', '607248b2e', 'e256c38de', 'd2ccca164', '30f3f6f1e', 'd3e848f98', '5760238de', 'eb52f1ee8', '12933020de', '192b92c0de', '156612cb1c', '12a74f29a4', 'be512a16e', '79a126a68', '143e3b7486', '1632ebf24', 'ef064cbe2', '1904afcb1c', '995cf988a', '14552f8de8', 'b328c70de', '69289730a', '11ea2fc486', '18cf2c87', '15bc9c2cb2', '193744cf6c', '12c7d2a16e', '1ee0c3bc6', '164af8d36', '9c2244c8a', '139b4fe7c6', '18d0af6a68', 'a6e0c2f1e', '1f24323ca', '12662c7164', 'f98cf8964', 'bc84563f8', '138ab2a10a', '5ef0f9ec0', '10f5c31418', '8039b346e', 'aff32e0de', '13c213be9e', 'f646ccf3a', 'bd25e8b12', '13362c4948', 'bd4c49b00', '47a9286f2', '14bb12e0f6', '3bf91de18', '65bcc308a', '158b0fcf24', 'a7b0be2', '12d14ce6ca', '12128f7164', 'f39e56508', '25071dcfa', '6873c141e', '1550d191d8', '15c1c49fe2', '8ea28906', 'd44af9edc', '7f20433f2', 'd6392190a', 'b112f86f2', '106302e0de', '9e72f9ff8', 'bd9aa2b00', '15cf8f29a4', 'a4a519bca', '5972ebf1e', 'ad723748e', '157f0f708a', '16d75b8f1e', 'f20cc96e', '14cfcc9ec0', 'da29b73c6', '108e2f2b0e', '51d4f8e24', '17c73be164', '9de243798', '9b4ee207a', '1008599b28', '1b5d09444', '1134d298bc', '70073908a', '1967bd3ca', '14a507d36', '1735259618', '5c3cf3138', '15f5f121f8', '12d4af7330', 'ce5db1bd2', '156a5ed3ca', '13db4f28a6', '1494649b2e', '77573794c', 'c067fa164', 'dafcf2922', '1823c25938', '115d512678', '84e8c88de', 'f8b2f988a', '4092f86f8', '11d792721e', '1499d2f4de', 'c3a912016', '924eccf3a', '5c6041ce4', '166ca8e4', 'f720c539e', '5d628b2e', '1378acd2de', '1480fb8e9e', '11fc736432', '4963bcbc6', '1102329ec6', '140f3c8bd4', '16fe32bcfa', '1e859d314', '114b44a6c6', '1247528a48', 'b478f1caa', '14b3828c86', '16ef2cc0de', 'a3d8e8ef8', '14a13e665e', '8d92f2cb2', 'a9072f45e', '374724cee', 'e5e92e4de', '2972374b8', 'eb06434ee', '18febb8964', '13135b8964', '14522f2e24', '1952438b20', '6032c8ec0', '150f1daf8', 'be53216e', '1809cc4ef8', '7a4d28b14', '157065ba7a', 'b4d739418', '97a8ca8de', 'ec871161e', 'e573088b8', '144c729b2e', 'de942e322', '17dfc20486', 'c7a82aec0', '142e2ca0e4', '18614fd48a', '18b9c5da44', '100e3bf148', 'e1ace8900', 'f94c248de', '18e2921b22', '1541128b06', '17e38286c0', '966025ec6', '75e5133ca', 'c52e5e6c6', '1071c48f9e', '1078cf9ca0', 'b292fc332', '8e5db8c86', '129f8f9ec0', '1bb4f332e', 'a320f0486', 'eef3c88b4', '16e7232038', '112f8ff322', '8205a64e4', 'a887bc938', 'd0072773a', '194e22f32a', '1ce6f1900', '18d72246c0', '1548acc6c0', '118e243338', '164524f45e', 'd19d1951e', '7df3c2006', '160a0f88e4', '1289cce0de', '113e122fd4', '277242bf8', '159a2c496e', '14f751207a', '8a34c2922', '15d2af88e4', '110651a10a', '13002c80de', '10352fd332', '1879cc88b2', '4cfd092', '46a24f0b2', '5dfc20164', '1271c38bc0', '1402a48ce4', '3435bc8de', '15fc24f724', '428a2e464', '3fe91939e', '15c724a3ca', '41872a90a', '139268bee', '14f9c48ab6', '5cb3c941e', '2af238bfe', 'df3928b06', '95f3fa938', '892821bf8', '192caff306', '2d712710a', '184c62848a', '55a22f30a', '17b04899e', '3d22c7148', 'ccce7cf9', '3b928f9e', '139352045e', 'd0a848e9e', 'cf6129ff2', '35e0f5cb2', '2d86f7122', 'ce86fe4a8', '18de0228f8', '1c8afe5c6', '1410725f1e', 'a412f88bc', 'e4650245e', '1a9e62178', '18cf2e95c6', '1001d28e5e', 'fbd2f70b0', '122b424900', '7a7fe16e', '11a8cc88e4', '17d67bd48a', '17415be0e4', 'eebc24c86', 'a716f9f4e', '8795cdba4', '10ff916646', 'c93cf4ef2', '4f8e48ed6', '121d3bc164', '1255cf9f72', 'b0aa4e48a', '166f9229c8', 'ea34f2f24', '4c619d95e', '1858cf9c8a', '179f3a64e4', '737429bf8', '16ce72d6c6', 'cfa62c8de', '7f45c7322', '9ce6cd2de', 'fb31b067a', '4aa1325a2', 'f2e436678', '10e5ee217e', '243528d1e', '9d384c32e', '55e3233f0', '8adeb20f8', '18a604e4ee', 'b2e117ba4', '17252fa4ee', '191bd17ba4', 'e78e29dc6', '17885c629e', '1370ccf48a', '397d36524', '185330d86e', '1124c4a27b', '9fb4f2b2e', '123c71da5e', 'bff4f8964', '8e2582ec0', '145862c122', '2cc6283ea', '12610c80de', '26f2fd6c0', '762469de8', '21b82d3ca', '29e12d6da', '151fd17970', '49f239920', 'd8e8f9930', 'e3b237122', 'c20c5dd1e', 'fd85cdcfa', '16384e267a', '491db8bd2', '12b128f2e', '6ebd3da7a', '61e229938', '8174f2f04', '404afbb84', '17f622d79e', '11b43b2b06', '795c2a0de', '78e13df1e', '52f91941e', 'c2fcc98de', '8116c8e9e', 'b8e82e6c0', '17f34fcce4', '387c21938', '71b8288de', '6817218b2', '18edcca124', '60c438bc0', '13e0221ca2', '2460cc964', '8646f84b8', '2133a2470', '92904f338', '44e2fa1c8', '1022e6951e', 'f9f2e2722', '134653db9e', '757d1ba46', 'bc282d0de', '17ab9f2922', '1fdc2cf1e', '57b238ee0', 'de52f0388', '7a3d2b07a', '13c8ea115e', '18f28cb3a4', '1249d99708', 'f5437e0de', 'e3284f7f8', '410aff30c', '1253c2a0de', 'f212f9b06', '4b872a95e', '16615babc6', '9d2f1c8a', '65f249ad8', 'dec6434fa', '7d742a464', '108b12895e', '591cf4c8a', '5abcf9938', 'be0b276c0', '105f9228b2', '12dc6f80b8', '15926c00de', 'ece024ee2', 'b04fb5c8a', '13b2e38bd2', 'ca7c28ec0', '16e3d3125e', '4e2438bc0', 'e9212a6dc', '16316f0164', '114cbb88de', '18b611de9e', '150bcfe48a', '12e933f8de', '373231424', '14de37f6c0', '1320d29dc6', '138e048e78', '75b845164', '67471dce4', '1175d9fd36', '8412fb07a', '105a4510de', '958cf8934', '194a828948', 'd28fb2c86', '1d133639e', '111efe251e', '3b60250e4', '2fbcfc486', 'a469b73ca', '37caf88b0', '74689d99f', 'c45719178', '49b244c8a', '12e0afd138', '39cd1db9e', '164f911676', '5d4547ce4', '57e92f6f0', 'ed74f9fc6', '15370c80de', '2562cac86', '77e97e126', '183b8236c0', '125fcca48a', 'e1fd21be6', '9a82896e', '1183d3de46', 'b9cc595c6', '1214cfd322', '106caf8edc', '131a841bca', '54b4c0964', '17ea129edc', 'b1b2e6564', 'faf927208', 'c8be51922', 'd95c4c322', '54d4f1922', '13514fd4e4', '165f2edf1e', '8a573b99e', '171d0fc964', 'bee5ed30a', '8261b8b0c', '14046c2c9e', '70f309bdc', '10fccc922', '58e3645e', '1813d2495e', '153212d32a', '4af2fe6ca', '177cfc8ed4', '10285adf3a', '12db9b83ea', '86b24832e', '7ea22c0de', '13546f9b30', '13b8737f30', '65304cf3a', '130b3c7cfa', '1884577164', '10ddd4969e', '66124896e', 'f3e0c8bf8', '7d9db98de', '110df42438', '132fcc8d5e', 'a69d99b28', '132472cec0', '564af8ca8', 'c471d99e', '7af9b8bea', 'e4bc28dc6', '1019db30a6', '11b02e64fa', 'b81ccc164', '991f71d48', 'f6e3fd65e', '12c332e16e', '1348c2c8de', 'd60fa32a', '97e542bc6', '139cb2e0de', 'd361288b0', '4022c48de', '14b7cc2cb4', '55272f6c6', '3c25e73e6', '258afc4b2', '4e5c7322', '5b62438de', '1121c5161e', '15e058215e', 'cc73c24ee', '186243f1e', '1118c5dcfa', '22048f36', '14c2121bd2', 'ab16f1b22', '3f12f74a8', '17c1cf8dcc', '7aa6c71de', '1305521900', 'c599af6e2', '78602a45e', '11a5924ee', '1440cfc486', '155f8f8ed6', '14234c48f6', '2ba929be2', '688d1151e', '17a29286f8', '83e0fcedc', '149c65d99e', '187e6c8ec6', '1184624c9c', '163721215e', '91250e6c6', '85e12a6d4', 'df9c24ca6', '1435cf8f24', '182eeda08', '96f23979e', 'c68acb8e4', '1520d1dcfa', 'c2b3a94de', '17b3f1951e', 'a54fb5922', '1665c29ec6', '301cc2ec6', '620629c8a', '571d01646', 'acb2378b8', 'a760cc0de', '7cb3a119e', '93d37946', 'ee0cc89c8', 'efb237c7c', '18fb9f8e9e', '722bb8c86', 'bae128900', 'ab62fc0f6', '1084e373e6', 'b5f4f9ec0', '8952ff300', '96b52039e', '162ea4888a', '3a43b8c92', 'e6cd1796a', 'b667b80e4', '1e3917972', '10d926951e', 'dbbcc34b4', 'fd471db9e', '61072f25e', 'c0af8de8', '9192fc89c', '17643117a', '1720af56e6', '18296c4ec6', '15ee439be8', 'b787228b2', 'ac1cca08a', 'e06823964', 'd773c74a2', 'f49248964', '88ae5e3e2', '90cefe08a', '18acfc1474', '1538af8ef2', '158277d0de', '170a37a486', '1bca4d330', 'd13d3794e', '127824cbe2', '12f12f30a6', '8f7d2016e', '34d85aee2', '44b91279e', 'bbcafcee0', '1648c41c8a', '15ab9192b6', 'cd65e8bd2', '30a137f24', 'b9319504', '17e0f0fc6', 'caf33214c', 'cfc629b0e', 'c562400de', '5e39280de', '29b4ce0de', '1864af1ee8', 'e9d42e0e4', '1044628e1e', '35692f322', 'a2a3bf3c6', '147b2a9548', 'aee0f8964', '11a391179e', '1dc49ef0', 'ccf5277b6', '190a22cec0', '1e4242f22', '16b16fcc8a', '33c6c9922', '11dd327158', '16de828964', '4445474ac', '9a0d298de', 'b392fd486', '190e72a8de', '1469dadf3a', 'fcf2f28f6', '13ab3b2c86', '16266ccc86', '2b4f0548', '4de32d3ca', 'fb72a8c8a', 'a52029f72', '174733d95e', '14a4cc88de', '127e12d322', '37b8c808a', '975d29bca', 'f58efe10a', '160e59617a', '1679f09478', '5832ce0de', 'c9717946', '7805e919e', 'a0613921e', '67aa283ca', '1729648a7a', '6ef4fcedc', '6b564e6ce', 'c5f44cb2e', '1515e56688', 'ebfd3ba9e', '180c729f9e', '15db020164', '17823bf0de', 'b967ff6c0', '115612e306', 'ea86f708a', '8dc6e971e', '17a649de9e', '3f6da2ec0', '10471627a', '11329b2be2', '195b5b00de', '11d9d2ad3a', '5a7308900', 'ebb24308a', '80a22f0de', '362847312', '7ff5fccd8', '88f3cdcfa', 'f4df3bc74', '58e13639e', 'e8322d30e', '27d736478', 'b1d528d1e', '14c52f84a2', 'd872f9c8a', '3d67b53f0', '4ef3a171e', '150ea2c486', '64d2fcb3c', '13df2b245e', 'b866ca122', '95133979e', '698e28eca', '6e34f48b8', '7b7921be2', '1815728e9e', '8f285beb6', 'a18d2d30a', '6dd5a1464', 'c1b1b8b9e', 'f7a599de2', '14cabb7338', '5691b8058', '119046951e', '768f25922', '6f2e3967a', '6739196bc', '169b239730', '1246fc0a2', 'e65c207a', '71e53126', '8ea6f4922', '27a0f98e4', '1893225cc8', '17bea48d3a', '151a82a8de', '7094e945e', '10b784cbc6', '71612e334', '189f9ff6c6', '33c88b4', '3a344e6f2', 'c9c6fd30a', '42f321938', '13d7337828', '186ee534a6', '18445493aa', '10cd269476', '38f22a164', '8fde30b2e', '526121922', 'f1caf831c', '40d0ce0de', '7659986f8', '7712f330a', '87dcf8164', '1012723306', '1849d2b8de', '1df3b8ca0', 'ec0efe464', '1409fedd08', 'cb25060de', '13b472f25e', '117eba216e', '68ddb330a', '4ca84888a', '16a4c49368', 'd313361c8', '12762f1b2e', 'ea7c2571e', '938cc98de', '139724d426', '4873b2dc6', '94d528900', '1875c234a2', '1510afc332', '146e54255e', '14713e90c4', '89ddbf322', '43a12269e', 'feb522bd4', '18334f0164', '9a78cc964', 'd0692d10a', '4a0f0945e', '844838bca', '102ce2d164', 'fdd259384', '7c4d283c6', '1428729f6c', '11f6249b12', '8287bcce4', '77951be46', '12b622a6c0', '8079b8bca', '17213673a', '8cb9195ca', '14da0c3ec0', '10ef23df9e', '1475d2abc6', '83849f330', 'dd06f84ee', '43dc69458', 'c09712170', '9c65a24de', '17d9729f46', '743325b38', '10c66f2c86', '1116b1d86e', '529f1188e', '134132d798', 'a5e04cec6', '6da125328', '69702abc6', '903528128', '14ed422f1e', '91f42aec6', '989fe9478', 'c32a28f9e', 'ff5c2cbf0', '104b4f8cee', '4b25e8ef2', '17978f9b2e', '3ce77c164', 'b513a7cc4', '634d17968', 'e4ddbf094', 'ab9cc1964', 'e1323ef8', '104cb288de', '156d22d122', 'a08d1797a', '17ba82f4fa', 'c63c298de', 'b1472d322', '6ccaca8de', '185722d164', '1a7cf2c8e', '1374af8322', '14fe0f1938', '145eac28de', 'c033c95c6', '107ed4d964', 'e0a12710a', '18c8f0915e', 'ade92e6c6', '4f602cf24', '1659f1d32e', '8987194ee', 'be9db8b3c', 'b5a8c761e', '7ef322dd4', '1221c200e4', 'f516fe0b4', 'a4ddbe5cc', '11c2845724', 'efcc2ccd8', '15425971e', '65c4c95e', '18c292369e', 'ab52e6dc', '3f859d3c6', '15de121b00', '9173c2168', '8322f048a', '17334fcc8a', '4e8c2c164', 'ca3048b9e', '11bc72a122', '8bc72832e', '120dc433ca', '183e9238de', '640fc8bd6', '981c48f3a', 'a3612e5cc', '15e450244e', '7066c0900', '51a1b98de', '11506e7978', '175f3c8bea', '117b4429de', '17ee2c4bc6', '14f26228de', '5b272d0de', '147c58945e', '2842c9ec0', 'dcfc4e48a', '1294ced978', '1346f2c88', '59b30d95e', '18d92f18a0', 'f8f239be8', 'f5fcc29a4', '13f33c24de', '15a6c2a5e', '3360c9cb8', 'ef5d24ec6', '4bf2cd0de', 'e63d1797a', 'e42b21900', '114791fea4', '1268f08ec2', '1603c41c8a', '13acc2cbc6', '1026047164', '1596128b12', 'f7f8f1ec0', '73bd379a4', 'd5df91938', '10433c8eea', 'a24f4ef2', '62d34979e', '170f84d164', '5e52f9cb4', '168b2c88de', '15c872a894', '1282921bd2', '214e3951e', '116e921922', 'd8b2fe6e2', '133f9195c6', '13634c8bea', '72f9b8e5e', '474e21bf0', '6f95a64fa', '17ae128b0c', '6fe4560f2', '5f0d25c48', 'a9692c0de', '3dd529880', 'e8f52c0de', '46ddc8cac', '73dcc8bea', '15a224a6f2', 'c85db2cb2', 'c64728998', 'f28e29922', 'ce3d2a3c0', '19ebbe4e4', '33a823c86', 'ed0afd322', '19273c7d24', '16f8724ee2', 'e99dba45e', 'f0f4c3c86', '5f985e6f4', '13f1bcce4', '21cd1ba7a', '53e728094', '222127306', 'aad04a464', '1f74f04a2', '189b22d0de', '11f8e2d486', '63de56224', '513cce0b4', 'e2f9194fa', 'dd6129dc6', '16c12fd4a2', '166a12bb9e', '16af8f8322', '86dda64e4', '9d4450b2e', '10396c9f74', '16527ff49c', '849428e9e', '2029f3932', '48f322be2', '10d142e464', '121b9273e2', '2721be148', '46333641e', '31211d942', '82cc401de', '9ab33db9e', '14ab53bba4', '16ca5060b4', '530acd0de', '8565e9b06', '69f429dea', '3669bd0de', '135a43888c', 'c7f44e3ca', '399e3e6dc', '14e9cca464', '6e632a6f0', '390c42cb4', '14273b29a6', '852fa0b4', '44729b22', '7b9d8215e', '3f307f36', '32a2cc164', 'a8dcca8de', '152691781c', 'e163248b4', '12e5dbd3d4', '134f24f724', '182cbf53f0', 'f30ac5724', 'eca4f32a', '19220ca4e4', '143bdba4e4', '10827bcf2e', 'dc16c18b2', '1784439b0a', '11c93bd4be', 'e9d09eca', '17c985a0b2', '10c0d1dd5e', '12b3c21b9e', '13a12c88de', '4154e6678', '16c4e394de', '16da911188', 'ba7db88de', '136f844ef2', '1575feda24', 'bb1cccf3a', '5fdd9b8e4', '179aa5207a', '11c4c24964', '1578d3de78', '31962a922', '7320c28de', 'd7bc28e5e', '14d62fd10a', '12ca4d3ec', '18a222cce4', '168391794e', 'fa7d1939e', '130e0c38f6', '4d2127328', '4cf91115e', 'b0f249fc6', '16f3cce122', 'd1d33db9e', '128d5298de', '15e8c2a27b', '13fe828bc6', '7bf4238de', '1c22ca16e', '5db84d7a2', '430acc6ee', '12ef0fccb4', '8264a3e2', '1004f0dcfa', '15b4e48338', '7e6468b14', '18e5e39468', '1b13a939e', '1166128de8', 'a9d3a6678', '6f7825cee', '12cb22b71e', '45342e164', '48251332e', '19329bd164', '138702a164', 'fe7783f2', '184059e3dc', '1834afa724', 'd7d4edcee', '178f33916e', 'c6d7288b4', '133b912168', 'dca221bdc', '8cdd21be6', '92e8288de', '11d33284ee', '8ed2fd322', '2283b299e', 'fe1e2a324', 'c4a9b9922', '103f9122de', 'd3f1de78', '9e32a269e', '163cd11179', '16b7922b06', '25dc969e', 'd7284d48a', '874c27964', '148e9b188a', '1f86fd124', '1138c4b15e', '13ec90929e', 'fe732e6c0', 'b75db18a0', '31d9e0a0', '9225ea09c', 'b6e6c76c0', 'f40eff4ee', 'c8d991c5e', '112a023c86', 'd3b12f338', 'ae73be464', 'd5a95781c', '6322fa324', '7b38f2c86', '13143bd132', 'aa39283d2', '326123086', '66e042be6', '13321195dc', '175bcf9ec6', '11ce9123a4', '10ebd112b8', '141dc4cce4', '71cc298e4', '136985a6c6', 'c832e661e', '1194acc0de', 'c9a22832e', 'd4a2ca164', '8612fc6ca', '45cc2d0de', '9d9dbd322', 'b56a5d86e', '36e1cd86e', '173e0f8924', '38a12f0b8', 'ced3e8cae', '56e6f496e', '10686f48b2', '1460f7086', '10a71b5b22', '167dccbce4', '17732a9536', '22d722d3e', '11ad5c967a', '870620ec0', '128462f4e4', '194237f0e4', '152f3b9bf0', '176f2ca4e4', '17d2117828', '18c60ce48a', '437d3fd24', '3a8d3d95e', '4b692f448', 'f90fb00de', '16774c28b2', '248d111de', '9be13973a', '13a70ce0e4', '190b2d122', '10ad4f00c4', 'faa6f3122', '17166f0164', '161602c486', '9f7d3929e', '2c212f300', '6d27b3bc0', '420cf2d2b', '1605e688b3', '16f46fe122', 'e2289217a', '13e8af7306', 'baa7b80de', '159cf32016', '1240722de2', '1225853ec0', 'f053164e4', '2ea11bd5e', '2f821bca', '31c4e94fe', '1235cccc1e', '1611db3086', '6a6c1be2', 'c1172f32e', 'dbddc261e', 'f60711352', 'a79c69efc', '13cc93671e', '109a6fe086', 'd53de78', '3e34f8948', '135fc233c0', 'e8b51b8de', 'b7e53217a', 'e7e32d10a', '119be564a2', 'fba2f1168', '154744e4a8', 'bf3df7138', 'a8791141e', 'b00b2aec6', 'ff1dbe486', '1560d22e1e', '51744e3e6', '3e9249f42', '12056f1926', '11b9c238e4', 'ac5e1e106', '6c20233f0', 'd2224708a', '2b4cfcce4', '10e26ce08a', '5bc2280e4', '4f06f9b00', '17f96cf45e', '12fcafc89c', '11e2137e78', 'ae8712524', '106622cbc6', '14e4af8300', 'ad20c4964', '545242b38', 'aab4f292a', '11f224aef4', '1da0cccee', '8d733119e', '6a471915e', '131cfc9474', '1800598314', '1a1d2a300', '625e8de8', '1504729f78', '141bc2e6c6', 'ccb241f1e', 'dc62496e', '18262c716e', 'dab2fd7a4', 'd68fb28de', 'b3c7194fa', '11586fa138', '11434c50a2', '111db396e', '152a029f78', 'b10fcf2e', 'd9c72d3e2', '4bd3651e', 'e3c54969e', '1225393a4', 'a24c2f0de', '710c2a486', '50aaf1938', '204c48c80', '164330dc78', '6a1db1cb2', '17cd511678', '2b20ccc86', 'f7611979e', 'b9b337fa4', '12f71b8dc6', '10961192d8', '6b1db6a68', 'a46c2a5e', '489db5328', 'bf73200de', '2a03b33ca', 'ba3244bf4', '8b8d2cf2e', '3c8592ec0', '563428ce4', 'ae3cc9c86', '4d902c0de', '1703232730', '146459b8e4', 'cbb3c7c48', '122f4f9de2', '880645b22', '124e841ca2', '7f8ac88de', '93c936432', '120bd12168', '15b1e48cbc', '4556f9cb2', '790afe5cc', 'bde3b19de', '852d1267a', '150397a8e4', 'e868975c6', '1791e565c6', '50cb2cb00', 'e512fe4a2', '5d3c29f46', 'f26845b32', '5b8d3129e', 'e013a919e', '10749a7cfa', '110bd2c0de', '56f9217a', 'd97110f8', '83730244e', 'c4211d978', '885cfa8e4', 'db6438b34', 'fa0c4e45e', 'e6bcc9f4e', '44058217a', '1869cf348a', '6242434de', '137c6e7c42', 'db2f92ec0', '7ca4a08c', 'c947361c8', 'd2471141e', '231cc4c86', '368aff322', '76c6f3c24', '9bb37b3a4', '17b473ec8e', '80f02aec0', 'c263b2c86', 'fed2f36ca', '28b321b26', '283d228b2', '1201c27cfa', '18b12f9b38', '153e6228e4', 'f12128edc', '59df1531c', '1623c2e48a', '2e6223b00', 'f744e464', '668d3db9e', '98d73945e', '118b04d164', '14bcd29ec0', '47d347cee', 'c75128bd2', '188a453c0', '538f9f46', 'e374c2ca2', '12cc72988a', '9fd316678', '141462490a', '16b92ff322', '9ecee7cfa', '15ba11786e', 'cda04cf24', '193bd29b28', '185e45161e', 'd8212a09c', 'e58469458', '26182a100', '8b22448b2', 'af8d29f56', 'a156f74a2', '189524d4ee', '74a02cf08', '3edd8945e', '10d67bc0e4', '2bc62516e', '1326c2a5e', '6af9b51c8', '18e24e08e', '5cdc69444', '14e28f8f32', '1672929e9e', '1092119708', 'c34c2d4a2', '11efcf3164', '161e11b964', 'ad9db38de', '522123f1e', 'a2fcc34fa', 'd51db8b12', '1888c2cf24', 'bc7d2cec0', '1955dbf30c', '191f2ed96e', '9b0dba0e4', '18196c2be6', 'b63842ca2', '34b4c2938', '18ab04c964', '4d75b38de', 'a66778b9e', 'cbe599b20', '17e67fe6c0', 'ffd245b22', '23f4fcf3a', 'ede6ce3c6', 'b222ca148', '7d05c261e', '503322938', '3b12f7338', '1766042b32', '6c88b64a0', '172fdbc486', '168cf3ece', '5a3307a74', '6abcf9c8a', 'eae12a32e', '9738f1e58', '8d062d6e2', '14289ecbc', '751feddc6', '169d1b8486', '14d0991b12', '1690d3be48', '6d65cc6c0', '1910fcdcfa', '10f95bf164', '554c2cbe2', '28e124922', '629c2cec6', '6491be486', '2de6cc79e', '1697309478', '420fe324', '8a873269e', '1168e3145e', '11e02899e', '1460d3b942', 'bf9892c9c', '168c6e2678', 'f034faca2', '239c39be8', 'fc871dba4', '12bcfc945e', '14c648ea4', '10bccc922', '614482178', '13f78484e4', 'ddd31be1e', 'cc20fcea4', '10f0717cee', '1433cf8c8a', 'dc62c48e4', '1addc629e', 'd4e129b32'],
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