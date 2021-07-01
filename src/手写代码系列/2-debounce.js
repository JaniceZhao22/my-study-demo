
// 防抖与节流

function debounce(fn, delay) {
    let timer = null;
    return function() {
        if (timer) return;
        timer = setTimeout(fn, delay)
    }
}

function throttle(fn, delay) {
    let valid = true;
    return function() {
        if (!valid) return; 
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, delay)
    }
}