var app = new Vue({
    el: '#app', //Element Property
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        url: 'http://www.paulmherman.com'
    }
}) 

// {{ }} Can be used as an expression
// Examples would be:
// {{ product + '?' }}
// {{ firstName + ' ' + lastName }}
// {{ clicked ? true : false }}
// {{ message.split('').reverse().join('') }}