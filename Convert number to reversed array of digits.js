https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

    function digitize(n) {
        n = n + '';
        let arr = n.split('').reverse(). map(el => +el);
        return arr;
    }