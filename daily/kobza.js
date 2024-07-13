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
  wotd_array: [
    // from 2022-01-20 to 2024-07-08
    '26f2fd6c0','bc282d0de','981c48f3a','5bc2280e4','3c25e73e6','31962a922','1632ebf24','2244e2454','383d1917a','14a507d36','aee0f8964','caa917d48','aff32e0de','7659986f8','40d0ce0de','24cbb48de','1993493aa','7b9d8215e','8205a64e4','5e52f9cb4',
    'd3b12f338','d7284d48a','71612e334','13f1bcce4','399e3e6dc','2366430e4','c63c298de','a83cc9938','7d05c261e','a11e30ed2','892821bf8','4e4439be8','7ef322dd4','44b91279e','30f3f6f1e','874c27964','78602a45e','8e2582ec0','99a11265e','c9717946',
    '98d73945e','8b22448b2','5d628b2e','4b25e8ef2','ab52e6dc','ce5db1bd2','8795cdba4','7b38f2c86','3a8d3d95e','9192fc89c','ba7db88de','d60fa32a','b0aa4e48a','65bcc308a','55e3233f0','cb25060de','bde3b19de','9e32a269e','ccb241f1e','2a03b33ca',
    'd97110f8','283d228b2','91f42aec6','139268bee','b56a5d86e','26b0438de','8079b8bca','1f24323ca','e1323ef8','16d73fb68','64d2fcb3c','b392fd486','6d2e7f36','cf6129ff2','46ddc8cac','97e542bc6','81b2256c0','44058217a','2a73c615e','2721be148',
    'b112f86f2','420cf2d2b','d7bc28e5e','503322938','3ce77c164','6ef4fcedc','166ca8e4','995cf988a','751feddc6','d2224708a','2b4cfcce4','cfc629b0e','83e0fcedc','50aaf1938','1bb4f332e','4a0f0945e','10471627a','a3b82d79e','c4211d978','d53de78',
    '29e12d6da','3d67b53f0','2fdcce122','c9c6fd30a','1a7cf2c8e','4bd3651e','938cc98de','6242434de','ba3244bf4','9646dd1e','a8791141e','bb72324ee','522123f1e','6d27b3bc0','44e2fa1c8','39cd1db9e','620629c8a','d313361c8','be0b276c0','b9cc595c6',
    '7805e919e','b00b2aec6','6d65cc6c0','d4a2ca164','3af425f1e','1152fd32a','4fe123886','59b30d95e','9225ea09c','49b244c8a','a2a3bf3c6','d0a848e9e','2af238bfe','bff4f8964','dd8722fd4','2f3d1648e','eca4f32a','d5a95781c','c947361c8','cdd999bf4',
    '6739196bc','72b9b530e','9e72f9ff8','3bf91de18','8dc6e971e','947cc00de','188a453c0','6dd5a1464','8f7d2016e','80f02aec0','504fc7958','4c619d95e','5f46f34a2','73dcc8bea','88f3cdcfa','ab9cc1964','b9319504','190b2d122','4a4629922','5db84d7a2',
    '32e9b3122','b75db18a0','762469de8','2133a2470','6a1db1cb2','66e042be6','1bca4d330','a887bc938','4cfd092','9b4ee207a','9b0dba0e4','c09712170','b9b337fa4','d0072773a','214e3951e','ab16f1b22','2f664d0a2','1a9e62178','4651234de','b40d31268',
    'e0e9bc8e4','a7b0be2','af8d29f56','d3e848f98','9e8724926','3edd8945e','9a78cc964','8b322848','8bc72832e','10bccc922','301cc2ec6','1ce6f1900','629c2cec6','6e34f48b8','f20cc96e','4cf91115e','48251332e','12b128f2e','c832e661e','2d712710a',
    '2d05a6678','67aa283ca','563428ce4','530acd0de','948d1153a','264547494','dca221bdc','182eeda08','acb2378b8','a54fb5922','4ca84888a','78b4f5b0a','41e122be8','2cbc25922','3474f4c86','7a4d28b14','6c20233f0','27a0f98e4','74a02cf08','ad9db38de',
    'c7f44e3ca','b1d528d1e','ca3048b9e','58e13639e','8039b346e','bae128900','362847312','b5a8c761e','844838bca','614482178','b478f1caa','737429bf8','8a34c2922','bb1cccf3a','96b52039e','83849f330','7e1c59618','af78ff08a','71cc298e4','2460cc964',
    'c20c5dd1e','57e92f6f0','6bb2fc486','2932238de','2029f3932','d28fb2c86','d40728e9e','204c48c80','5fdd9b8e4','8174f2f04','5d3c29f46','35e0f5cb2','491db8bd2','100c42b00','a46c2a5e','d0692d10a','df7cca15e','8565e9b06','6a6c1be2','3a43b8c92',
    '6491be486','19ebbe4e4','5412fcb1c','9de243798','654cccf3a','d361288b0','b292fc332','5c3cf3138','5c6041ce4','31d9e0a0','da4f08cb8','ab62fc0f6','8cdd21be6','b933c93a0','c75128bd2','8a873269e','d19d1951e','72f9b8e5e','404afbb84','991f71d48',
    '2972374b8','168cf3ece','94d528900','4b872a95e','d2471141e','bf73200de','54b4c0964','9ecee7cfa','a08d1797a','e110cc0de','18cf2c87','71b8288de','5f0d25c48','7c4d283c6','6395be464','84e8c88de','c45719178','acc24a45e','870620ec0','33c88b4',
    '22d722d3e','45342e164','1c22ca16e','bbb423cee','7066c0900','11a5924ee','baa7b80de','17213673a','1e3917972','d98629f78','7bf4238de','7aa6c71de','258afc4b2','849428e9e','3f12f74a8','8612fc6ca','6f2e3967a','95133979e','c34c2d4a2','c263b2c86',
    'c5f44cb2e','6f95a64fa','66124896e','ae3cc9c86','4265e2478','3da43cee8','538f9f46','c8d991c5e','8261b8b0c','2de6cc79e','56e6f496e','4706fcee2','faa5db9e','da29b73c6','7d742a464','b5f4f9ec0','8fde30b2e','2f821bca','83730244e','75cf5cee',
    '885cfa8e4','bcc321b38','c4a9b9922','625e8de8','a2fcc34fa','7f45c7322','dec6434fa','397d36524','65c4c95e','98702e0e4','20a55d95e','70073908a','8ea28906','8987194ee','880645b22','c52e5e6c6','31c4e94fe','b720c1938','410aff30c','bbcafcee0',
    '1da0cccee','2ea11bd5e','34d85aee2','9c87bcf3a','3b12f7338','975d29bca','3c8592ec0','5e9cc2c86','b8a1bb8de','db6438b34','27d736478','c85db2cb2','164af8d36','b4a8284e4','6a471915e','8ed2fd322','9d384c32e','56f9217a','9d4450b2e','5893a615e',
    'bf3df7138','6f7825cee','28b321b26','5abcf9938','d1612d330','d773c74a2','86b24832e','ae8712524','b04fb5c8a','48f322be2','93c936432','c1f4c4922','dc62496e','4bf2cd0de','61072f25e','420fe324','8f285beb6','458e28c1e','d8e8f9930','67471dce4',
    '9366cd7a4','9a82896e','be53216e','1f74f04a2','dafcf2922','93d37946','c2fcc98de','8f8e57c32','42f321938','92e8288de','9c2244c8a','8646f84b8','c166c73c6','1df3b8ca0','b1b2e6564','8d062d6e2','78e13df1e','c1b1b8b9e','d2ccca164','3360c9cb8',
    '60c438bc0','ac221bf8','390c42cb4','6873c141e','571d01646','5f985e6f4','8adeb20f8','9a0d298de','326123086','9be13973a','5cb3c941e','17b04899e','b967ff6c0','d5df91938','75b845164','1e4242f22','1e859d314','9c65a24de','1ee0c3bc6','5691b8058',
    '1326c2a5e','2283b299e','591cf4c8a','634d17968','be9db8b3c','3b60250e4','3f859d3c6','ad723748e','940bbe0de','35352a95e','52f91941e','21b82d3ca','79a126a68','4c1eee4a2','af16fb972','b667b80e4','607248b2e','9d9dbd322','4154e6678','111db396e',
    'a3d8e8ef8','25071dcfa','8412fb07a','668d3db9e','54d4f1922','cd65e8bd2','18e24e08e','903528128','62d34979e','c4e0c9c8a','222127306','b866ca122','1967bd3ca','5a3307a74','5b8d3129e','698e28eca','64462d6f2','de0c29dce','7a7fe16e','8ea6f4922',
    '1a1d2a300','a156f74a2','9325e88b0','23f4fcf3a','6bdfa617a','50cb2cb00','77573794c','8d92f2cb2','86dda64e4','77e97e126','11e02899e','df3928b06','46333641e','3d22c7148','14c648ea4','d9c72d3e2','cbb3c7c48','1dc49ef0','a3612e5cc','907912170',
    'ca7c28ec0','1b5d09444','2aa2f0b2e','22048f36','b256f34b8','e013a919e','c067fa164','7a3d2b07a','b513a7cc4','4873b2dc6','7cddb83f2','768f25922','430acc6ee','6ebd3da7a','20fcc9dce','428a2e464','abe8cb71e','69289730a','368aff322','1f86fd124',
    '4ef3a171e','53b238bfc','710c2a486','6ccaca8de','564af8ca8','3669bd0de','f744e464','15e7783f2','b69dba164','a6e0c2f1e','150f1daf8','5af44a31e','7ca4a08c','2b4f0548','b787228b2','9ab33db9e','955de8b28','cc73c24ee','2e6223b00','4d2127328',
    'b8e82e6c0','3f6da2ec0','cfa62c8de','c2b3a94de','a66778b9e','4e5c7322','25cf3794c','d573c74a6','e9d09eca','99e041be2','7df3c2006','474e21bf0','de52f0388','7f8ac88de','b81ccc164','63de56224','15a6c2a5e','41872a90a','b3c7194fa','4e8c2c164',
    '90cefe08a','bd9aa2b00','10fccc922','4b692f448','32a2cc164','3b87f7138','8a573b99e','21cd1ba7a','b2e117ba4','ccce7cf9','790afe5cc','1c8afe5c6','67e0fa4e4','81cb28e9e','7c34cc848','a412f88bc','243528d1e','1346f2c88','526121922','c64728998',
    '3b928f9e','5760238de','8c68224fa','dbddc261e','2b20ccc86','331648e9e','be512a16e','89ddbf322','961db9b38','966025ec6','dcfc4e48a','5832ce0de','d6392190a','65304cf3a','722bb8c86','1460f7086','d3f1de78','ddd31be1e','b328c70de','1addc629e',
    '49f239920','4f06f9b00','5b62438de','6084973e2','545242b38','dab2fd7a4','489db5328','88ae5e3e2','35692f322','4556f9cb2','2fbcfc486','1d133639e','d95c4c322','45cc2d0de','a5e04cec6','a320f0486','c9a22832e','9fb4f2b2e','314d1925e','d6f4f5b2e',
    '51a1b98de','3e73a1258','33c6c9922','a18d2d30a','7ea22c0de','65f249ad8','cb4e2d122','26182a100','ac1cca08a','a9072f45e','17e0f0fc6','1d65924ee','7af9b8bea','a24c2f0de','a9854217a','35a6c81c8','c3a912016','1225393a4','743325b38','bd25e8b12',
    '908f21922','69702abc6','97a8ca8de','858727328','53e728094','a9692c0de','3a344e6f2','cc20fcea4','b6e6c76c0','852fa0b4','74f221964','c0d2f9618','924eccf3a','dc16c18b2','ad20c4964','a24f4ef2','2562cac86','3fe91939e','374724cee','6af9b51c8',
    'c6d7288b4','b7e53217a','4d902c0de','5ef0f9ec0','a4ddbe5cc','b63842ca2','ac5e1e106','dd06f84ee','c7a82aec0','69f429dea','59df1531c','30684f338','4aa1325a2','12ca4d3ec','8c29246c6','4445474ac','9fd316678','31211d942','b0f249fc6','95f3fa938',
    'de942e322','7e6468b14','91250e6c6','ae73be464','a58d117a4','2c212f300','5e39280de','43a12269e','3435bc8de','958cf8934','d68fb28de','a716f9f4e','d51db8b12','d4e129b32','529f1188e','a69d99b28','7712f330a','248d111de','a61cf9938','17643117a',
    '66692cf6c','c0af8de8','b10fcf2e','322bb9938','51d4f8e24','37caf88b0','aa5db83e8','5d4547ce4','852d1267a','caf33214c','e06823964','8952ff300','47d347cee','14289ecbc','96f23979e','aa39283d2','7094e945e','ce86fe4a8','a0f42a45e','ce3d2a3c0',
    '757d1ba46','6da125328','bd4c49b00','6abcf9c8a','a9d3a6678','68ddb330a','8d733119e','9173c2168','387c21938','aab4f292a','bc84563f8','6322fa324','e0a12710a','76c6f3c24','9ce6cd2de','36e1cd86e','6196233f2','5b272d0de','cbe599b20','d90af86f2',
    'd8b2fe6e2','6fe4560f2','82cc401de','a229b7164','3e34f8948','5dfc20164','46a24f0b2','77951be46','239c39be8','5a7308900','74689d99f','4de32d3ca','e65c207a','bc7d2cec0','a4a519bca','373231424','79e12f306','db2f92ec0','1c6229c8a','4d75b38de',
    '6c88b64a0','d13d3794e','5cdc69444','a52029f72','a469b73ca','3c611bea4','2cc6283ea','537dbe39e','c599af6e2','dbbcc34b4','7320c28de','4e2438bc0','8cb9195ca','d7d4edcee','5972ebf1e','a0613921e','7cb3a119e','3f307f36','3dd529880','25dc969e',
    '55272f6c6','c1172f32e','b4d739418','a021256e6','3e9249f42','85e12a6d4','2ec9cd8de','dc62c48e4','7f20433f2','c68acb8e4','9acaf7328','a760cc0de','c033c95c6','c8be51922','4022c48de','d678286c6','87dcf8164','1246fc0a2','6b564e6ce','186243f1e',
    '38f22a164','c3de38ee6','b360fa0e4','7b7921be2','2d86f7122','c32a28f9e','29b4ce0de','437d3fd24','df9c24ca6','92904f338','9bb37b3a4','57b238ee0','ced3e8cae','34b4c2938','4963bcbc6','c562400de','80a22f0de','44729b22','d44af9edc','ade92e6c6',
    'cd1b41ec0','2e33d947c','c93cf4ef2','c726c7122','d1d33db9e','43dc69458','2ba929be2','30a137f24','584d1141e','231cc4c86','b611925e','d8212a09c','cf06253e2','15425971e','a1e9271c8','ccf5277b6','2c66cc8de','33a823c86','7ff5fccd8','1fdc2cf1e',
    '51744e3e6','b1472d322','38a12f0b8','727c28d1e','554c2cbe2','2842c9ec0','75e5133ca','bf9892c9c','47a9286f2','6e632a6f0','a8dcca8de','4092f86f8','8b8d2cf2e','bee5ed30a','70f309bdc','a7d2ff30c','9738f1e58','37b8c808a','55a22f30a','fe7783f2',
    'd0f3703a4','6817218b2','6c7448b2e','8287bcce4','71e53126','4f602cf24','2bc62516e','9f25e8b00','7d9db98de','58e3645e','a79c69efc','8264a3e2','61e229938','513cce0b4','277242bf8','8b7528dc6','dd6129dc6','4f8e48ed6','989fe9478','34729bea',
    'c471d99e','b222ca148','6032c8ec0','d872f9c8a','9d2f1c8a','aad04a464','688d1151e','8e5db8c86','11c82178','dfe6c1922','8322f048a','4af2fe6ca','6b1db6a68','73bd379a4','795c2a0de','cda04cf24','9f7d3929e','8116c8e9e','640fc8bd6','1b13a939e',
    // from 2024-07-09 to 2027-04-05
    '1aa9eee4a6','16854e7cde','165cacb8de','e74af2d04','1d1bc2e158','e78591284','e5a2f5332','1c3a24a3ca','167e929de2','eae13fe7a','eb54e673a','e8104f138','e56bba8c8','16223fd65e','ea6642f24','16366431c8','ea9d09edc','16575b9ec0','1d1f04c948','163a0f8948',
    '1659cc88b2','e3b842b38','e192e1636','eb06c2958','e982c98c8','e37cf05a2','e1e529b38','e7e82a958','e973b84de','e9cd29de2','1c9e357b98','163f44e0de','eb96f2a5e','e250cd0d8','e873c7da2','16185af45e','ea16f115e','e42128cb4','ec012a4fa','1a947283f0',
    '167b9b2c86','ebd4ca4d8','ec8b28c9c','ecf4429c8','ec722a486','e172e7a58','1a30a4d49c','1680afa45e','e3c6f8ec0','ed142e464','1614d28d24','164302d158','e8a6f571e','e21d3df18','1c14d31418','1c94af34c8','1ca22ca0d8','1c9aafa15e','ed6da2b0e','1663f4d95e',
    '16939280c8','1a152f83d4','1ab5e37f36','f0bdb8ade','164bd2e3ca','166b3cbf08','161ce2d0de','edf0e797a','e612280de','e5e22c3c0','e2de37956','162d27df18','e33536736','e71c419de','edb1bcf1e','16261b3948','ee1c489de','f0c717e58','eeaf19398','166e12d126',
    '1a992fa16e','f05524be2','f132c1bf0','1d21cf9ec6','163264e0c8','1a185a6736','ee4c5dcd8','1a26b21900','e44ac5724','e286f9bca','1a1dcf9b1e','efa7270de','efe64a388','16667ff3f2','1672820158','f0322d0de','1ab342a458','1c1bc401a6','ef3f1951e','162b4ce708',
    '164e7780de','eed2c88de','1a226fe086','1645cc8958','ef7e561c8','1650b2e0de','167797d0d8','e8eaf71f6','e4ef16736','168b3c8ec0','e49cc49f6','168f44f4d8','16b602a148','e91c5da44','16bb1bcf18','e5384cce4','1abb3a64de','169e92f45e','e682ccbe2','e6dd2761e',
    'e64acc6c0','1cadf9e8de','f28fc7976','fa92fa4b4','fae512ec0','f2f5219de','fa2bb715e','16c22f3858','16bd04d0d8','1ca9d2abc6','1d172246c0','fb20c7964','16a4cf1922','1d27e97f36','16ca842d18','1697d12168','fa72253e2','16ab3b2b00','1a2bc48d24','169b3288b2',
    'f310fc95e','1ac1ccc158','f14439b0a','16a33b8958','16b0729c8a','f25cfa0de','16c66c9b2e','16d33c7d24','f18e49f18','f99e68bd6','f1f8fd0f6','f20cc88c8','f3a1b7158','16ce5e8edc','16ad6cd492','f9e32e6c6','f368cb388','16ee116736','f972c81f6','f41648ef8',
    'fba2fd41e','f3f422d1e','f48d28d1e','fb6357b88','fc3d19154','16d5269558','16ea4bc938','f46139288','16f3cf3f1e','fbd2e7958','16e752e724','16d872a4e4','16dd341736','16e1f49922','fc7c2e6f8','fc8467c5e','1aa12ff326','fd124d164','fcf5b895e','fe1c2d10a',
    '16f9c7df08','ff472cdc6','f507b3ce4','16ff30dc78','f4ccc2d18','f7ddbf300','ffbcfc15e','f78d37b9e','1ca682d158','16f74418de','f5f9b38e4','f6e72a27a','17006fb95e','170f5bccfa','f756c9468','f815b8ec0','1c1d2edf36','f61ee30a2','fffc25938','1001fa7978',
    '170a129b00','1706bb730e','fdcf32016','fd4628bc0','fda5eaeca','fec457f98','ff0fc7ebc','f58cf8948','fe46fa138','1a2ce2e122','171344e6e6','f85dbf094','f69cf895e','f64d3fc8a','177b337828','f88c57948','1aac629ec6','100a6f079e','171df42438','fe9d47948',
    'f565990de','f734c31f6','1722e3267a','f8dc2e4de','1d30724300','1c20fbf122','1a37848f18','f933b8b0e','178a111636','1a3b0ce0d8','10045a64d8','100dd47ce4','1013428ec0','10566fb95e','1a9dcfcbe6','1025b4ee9e','1a3e2ca1d8','10b73b80d8','10b14f02de','1718d17948',
    '1717048932','172caff4bc','10c78f6f36','102bc25c8a','1aa66c4eca','1a43d17f36','1a5132d798','10623b7486','1725db7328','1d282e64d8','1029e976be','10d245939e','1c3ccf2d1e','102dd8df36','10cb3020e6','1032fa2ec0','10baba153a','10c33c90f2','109e2fa158','175b637f36',
    '178d2f6cc8','1c441cde6e','172b4f4d1e','10a619bc5e','10bde55bf2','105ab47948','1c4931dea4','109b8f8122','10cc628122','101d5b895e','1a486f7158','1a4526644e','10aaf41608','1754e2d148','1a4f9228d8','10a224d312','10220489c8','1786622b38','10afcfb39e','1a69d28d26',
    '105ebb8bd6','10dc5adf1e','106b121f24','10d4b2abe2','10db3b2d14','1abc6f5b22','10e243e138','1762597d1e','1a7af161c8','10e86fe69e','1732244ca6','10e5120164','10ee19939e','1a773c7ce4','176f22b71e','1d2f2fa958','175f8f9b00','17658974a8','1ad292015e','1acd3a945e',
    '10f12fe4a2','10f8cc58de','1016041bca','176bc42f24','1744fb0148','1a5f8254de','1a812f48bc','10667fd10a','1c4dd9e5ea','1a7f3b8c86','10f4d28a1e','106c6a7e58','1770d2b15e','11066228de','1ac8a9669e','174f659518','17523bf0de','1d346e2678','110942e608','1ac784c0d8',
    '1cb255d8de','1cbe51a10a','1d3f1b2886','1b0f42d32e','177e22f4fa','110dcf9cb4','10726f70de','1a5b5b0158','173f523736','10fdcc286e','1101d47f36','1c534c8964','1792bb8948','11129bd122','173a5067f4','108232bcfa','1018d1178e','1a57371ec0','17806cf082','103a7ba948',
    '173624a0b8','17433bc95e','1749f17c5e','1078f01178','1a8b53bba4','1cb7cf051e','1034549388','17778488c8','103e848f36','1d428f8e1e','17d73b5c8a','17df8f9922','104382a958','1c2b4f9de2','107e5ec89c','104a77539e','10760fc8de','10479b4922','104c852ec0','10538488de',
    '1d4b307cde','108a727618','17e142016e','1084f28948','1090cf9b00','1cb8506678','179e9bd148','17abd2896e','1ae4519618','108f3284ee','17d9e2a324','17ef84e458','113131de9e','1797653ec0','17e67fe31a','111abb71f6','119b9164a8','17ea124c9c','1d383b308a','179b3ba158',
    '11586fc3ca','1194cc89de','1cc3d3125e','1ae3cfa3ca','11147229a4','11ab1baec6','11a062a4de','17f38f9b2e','1a65dba69e','11c62ca0e4','112b8484c8','1155d2e5c6','1d4e95f3ca','119e32d10a','1160c2cbc6','180058215e','11238fd708','17ae128c94','17b3cc9dc6','11b52fd1de',
    '11afe561d8','17fa77d41e','115d6f4948','1126f19ec6','112e2c48c8','1810728bca','116fcfe3c6','1165d5df36','1aefdbe0de','11a78f19e4','11ba92719e','18050cc148','1c31cedf18','11ca5e98a8','17a38238de','1d4797a8c8','1a926fd122','11b38fb07a','11733b892c','11c33c8bd2',
    '1169d41708','17a45116b6','11ccc2c15e','11be84d0de','17b86ad122','17b60ca4d8','17c259da08','1c246fb958','11d344e4a0','1c42fc75cc','1cce3f38f6','1cca6ca3e2','17bef161de','1cd3cc9178','180dd4939e','1d5122a3e2','1d73c4d338','117525bf36','17ff9122de','180b8f895e',
    '11d5b41618','1c2f97ae08','1a8722d158','17c74f9458','1d646f8486','17f742e158','17ca72a32e','11e5c7df1e','11fb84cf3a','11f4d37d3a','111ddb86f2','1d69dbe72e','1a8f02f6c6','1137238bf4','11ebcca48a','120a517f36','17cdc42938','11ef5b0148','1a6f22a3ca','1d5722f330',
    '11dc2234b4','1a61db015e','1adc728ac4','1207cc4c8a','113d72d0de','1d6c71da5e','113b52a122','117f3c8bd4','17d1c49f68','1201ccc0e4','199fcff6ca','1ae8c41c8a','18c02f8ec6','1817d28bf8','1b060f88e4','1178ef58de','19832b245e','19a871be1e','1a70911922','19ae8cbf36',
    '183cef539e','11423b70c8','1147525122','114f9284b2','1af7dbe6c0','1180497312','11f10cc158','1148242c92','1151d17d5e','18426433f8','196232f122','120ebb895e','118e6c2fd4','19a6a48914','11d92f84a2','11886f98c8','1b0ab2a10a','19b219da08','11845e9188','11926fd79e',
    '1af06c2948','11e0623ee2','1b10c42912','11fce49dcc','12104edf1e','131f5249b6','181bd17e9e','1ad8d31298','1d5b238b0a','131b82b398','12b0a2a0de','183b837cee','1424717e5e','12970200de','1c3537fe36','192e922948','14998e7e58','19978fd718','129df08c8e','1ad522f486',
    '14953e90c4','1835f1c90a','149e5cdcde','1c5462c30a','1b00e45b1c','191c5873e6','1afcacc0de','195c72845e','1924729f6c','1af81cde7a','143204888a','1c794fd0de','1b18729f78','14173c9346','122619f99e','1316821548','14a254c3c0','1322a200de','1d5f0f015e','18b612f6f8',
    '1ba96fe0b4','1d6222295e','18470f6958','184b2401ca','141b5be6c0','142c7bccc8','133185a4a6','12ae82f4fa','14a72ca4e4','1d89cfae18','14a932f6c6','14af91d95e','141e0c716e','12a0d2be36','1216124b22','199a5e9cb4','1b3a37c948','1991d47cd8','1299dedf1e','14b26cc95e',
    '1957d17970','181cc51718','1bd0d22e18','142232d100','1c5d5be15e','12a7d17d2a','1919e0939e','14b6a4cf3a','197872a894','197e5e9b38','12ab9124fa','12bdcf2958','142b337f98','14bdcc8cee','1cc693bb88','13255be08a','14c292b158','1d84d16736','1bae125b0c','14b8a2a158',
    '12ba3b0158','1d7ddba326','1c59d27608','1219c49938','1923249fd4','182222c164','182caf2ed2','14d3f15bc6','19a03bcf1e','1439341708','1b42047164','1b1f936736','1328b2e15e','14c78283c6','14cb328cb4','14372f80de','18bc6c9646','1d8c6fa6c6','1bba129c92','18bb8f29a4',
    '18962c4948','1b99649bd4','14483bf094','1b9ee6951e','14461233e2','19b5048148','132e73bf36','1b374c895e','1334af28de','14cc6ff3ca','143f4f9bee','19b8c42958','144dd3b9b6','14e1c48ab6','1221b42158','133cc51618','14e89c8ca6','14e4c4e6f8','1ba4b2e3e2','1cfb3064de',
    '121e041f36','14416fe6ca','1d778ccf24','189e4a7f36','1d7acadd1e','18278f015e','1338a488de','122a0fca9e','1c7412d10a','1bc662c618','1d83d28a64','1d905edf36','12c26c8ec6','19c3c2e148','1b94cf4ec6','14f31be15e','19be4a971e','14532f019e','14ef92c486','134397af9e',
    '19ce7ba96e','1353db3bc6','1b3e2ca958','1bb3241e58','12b53bc148','1347c2c15e','14541a1636','14df8484de','1b146c48de','19c66c2b2e','19874f545e','1478dbf4d8','1b529254d8','12ce124b9e','1da9db88bc','134fd36178','19c8e25122','134b30916a','135a51151e','1ba2fada08',
    '136d62e464','19175bcec6','122c581736','14d9cc2ca6','136a248122','14d4af7306','14778f0158','14fa64e0d8','14f53bc15e','1230cf9ef0','1bb7cfe30c','1b20af36c0','13663bc8de','1503917b9e','18cb922922','182a0f2b2e','1372509b30','1bbd2fd138','1d9a89217a','19294ce6ca',
    '145a3b2b38','1959cfe0de','14ff5be15e','19d0db988a','1b31e54bc2','1bc21c79de','135e12c6ca','18cd8530a6','1362919268','145cc2d3c0','12c46f2d8e','19760cc148','1357db9cee','147fc2c486','150f5be72e','12d12f70b0','137853df18','189a51795e','1bca0cc95e','1c7cef1be6',
    '1bccb2d4b2','1833911636','1933337f36','1bf522f46e','137fe61478','1c6047df36','1505d3df08','193a24f464','15093b4cb4','123a6f2c86','18c69bd15e','15134fd79e','13760ccc1e','1b4812a6e6','19da3bab00','12ca9271d8','1d9e8c28de','1380cc28de','18a072a958','14624b645e',
    '184e1164a2','18d32c779e','138a0f88c8','148224a6f2','12e7c2a39e','196d4c9922','14925a9938','19d56c9922','1bddccb95e','14645e91a4','146bcf8958','1488c28f9e','1851d36718','1386ae7b88','148e3b0be2','19365e0bf2','19894f1bca','138e132664','1d94a2a5e2','1c6c59e5ea',
    '19dc6c98d8','123e112672','188f82830e','1486b47958','1bea0f0bca','12426f488a','1d074c8bea','1be33d969e','1390e4d3ee','1237e561de','124d4f8958','1da55be45e','1db2357f36','146dd230d8','139f92f724','1d1332a4b4','14734489f6','1514cf895e','19e3dbe0c8','151e242f1e',
    '1da345da9e','151a1289c8','12d6117b9e','19428f70de','1cd62fc486','1c0262c148','18ab1b2948','18a52fa6d4','1967309478','12da128b0c','1396129b38','15216c19ca','13eb42cc8a','18af4f488a','1c8237f6c0','15334ccf24','1527238be0','152b3be30e','194e921922','193e12348a',
    '12eb8c19f6','1857841e78','1945dadf3a','12ecbb4cb4','152f4c7a74','1dac72e6c6','13d79734e4','18b1c2e4d8','1c93cf190a','124a3be6c0','1c73ccc15e','18878f1cac','1cf5b4161e','124612731c','15427be72e','1253cf3122','19e6afe6c0','13e73b2c86','1c6933fa08','18da5978de',
    '13ee8fe6dc','154732b388','195171225e','1b45e5c3e2','155232a300','1d01316736','19e86f33e6','153b4fa3f4','154a9b2bf2','1cd94f8948','185b3b73c6','197219be08','19f0fc945e','1cff3b8948','154e925b0a','1b25da6736','153702e6c0','194a8f8e9e','12ddf5217a','19ec65bd48',
    '153de67e9e','196a6cae9e','1a09cf8b9e','13f1cff6c6','1561f31b26','1bfb25925e','185f4f348c','15552e7948','12572f295e','1c8a12c8a8','13d9322958','125a32e15e','1c656c28de','198d2c88c8','1bd542e0c8','13aaf6396e','13dcf280de','155c727f1e','12f1da2178','126a51a122',
    '1a038f33ca','18d5f020f2','1be67b80d8','139a37c95e','15592f71c8','1d0b91794e','1c842fa6c6','1bff4c969e','1b2d3adf08','13a4642d2e','1569cf8958','1d0e0c8848','1b4c4edf08','1c8ddbe6c0','1b2a7234b2','15670f295e','1ce3c42b0a','186382a964','1a078cc15e','156c6c9b06',
    '12e292b148','15739bd30a','13a302e0de','1893020158','15752fe6ca','12fe7fa15e','1b5aa4888a','1cde3578de','1b572fa164','1c08723ec6','1bdb227300','19034298c8','1865f4a92a','15887bccde','127e5323f8','1b5ca49ffc','186b02c288','15786f045e','1a0e32c95e','1bf1e0d3c6',
    '15849a7cfa','158e0f53c4','1591dedf08','15820fe4f6','19f6128964','1b62a2fe36','19f8ce7c5f','19fcd3b942','1302917af8','157e43e4a8','1cf040d3c6','15d6461276','15d8d17979','1b6672a8de','126c577148','186f248922','1ced72e48a','1a1302f3e2','13047280de','15e249de9e',
    '1260ea2476','1872242b38','1befd1939e','15dcf0217a','159cfb295e','15e6722d5e','130e8fc158','12710fa158','15bb4f4922','13af4fcc8a','1ceabbe158','1b6c6e94e4','15a0af8300','13e26f2d36','15c2624922','1c060c8ca0','15b6b2a15e','18fdcca464','1c0f82f6c6','15bfc2a16e',
    '15e9ee8bca','18f47ba486','15edfaf448','1404b2c8c8','15f16c316e','13b072cec0','1601b4129e','125e048f08','1b68d1215e','1ce4129ca0','1c1323141e','12fa6fb958','187a22c148','1b73928148','15f7922958','1b7451269e','13c1f123e6','1b89d17d48','1b8dcf1be2','13f46f999e',
    '15f96c4ec6','13fa438b20','15fd339724','18753bd158','130a8e2458','1609dbe0de','187f0f6f36','1b829bd486','15aab4795e','1b786f8bf8','1b7c438b20','1b874429de','18dfcf34a2','1881fa279e','188b2c892c','18e332cc86','18f89060de','1b933b2bce','13127ff3ee','190c728cbc',
    '15cf370158','190a22c15e','13baaf88e4','1599cf295e','140b1b56e2','1605728f08','15a5e3cc8a','140ddcbf1e','160e11b948','18f232ccc8','161131df36','1905fa748a','15c472815e','12f74298de','13b4acc148','19114fe158','18eb0c80d8','18eef986f2','18e73b1b9e','15afe57e08',
    '1594642d24','13fea42ed4','15ca3b28de','15d2249b12','13be049914','12646fd12e','1275db83e2','1280fb2958','15b222a158','13d3969b06','127b828c86','140073ec8e','1410cf9cc8','13c8ccf48a','13c6541708','128b4f8be6','12860fe6c6','128e62a958','12933b2f18','13ce8fb07a'
  ],
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
    if(magic) st = st.replaceAll('г','ґ')
    return [st, ddelta]
  },
  encode(st,ddelta) {
    var keys = [];
    var includesGe = false;
    for(let i = 0; i < st.length; i++) {
      var char = st.charAt(i);
      if(char == 'ґ') {
        includesGe = true;
        char = 'г';
      }
      keys.push(keyboard.indexOf(char));
    }
    var keysEncoded = (keys.reduce((acc,k) => (acc << 5) + k) << 1) + (includesGe ? 1 : 0)
    var deltaAndKeysEncoded = ((BigInt(ddelta) << BigInt(26)) + BigInt(keysEncoded))
    return deltaAndKeysEncoded.toString(16)
  },
  generateNewBatch(size) {
    let usedWords = new Set(Wotd.wotd_array.map(encodedWord => Wotd.decode(encodedWord)[0]));
    var newWords = new Set();
    while(newWords.size < size) {
      let candidate = VALID_WORDS[Math.floor(Math.random() * VALID_WORDS.length)];
      let isSpecial = candidate.indexOf('*') != -1;
      if(!isSpecial && !usedWords.has(candidate)) {
        newWords.add(candidate);
      }
    }
    return Array.from(newWords).map((word,i) => Wotd.encode(word,Wotd.wotd_array.length + i)).sort(() => Math.random() - 0.5);
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