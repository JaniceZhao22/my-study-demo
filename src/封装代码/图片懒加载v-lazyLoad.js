const Lazyload = {
    install(Vue, options) {
        const defaultSrc = options.default;
        Vue.directive('lazy', {
            // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
            bind(el, binding) {
                Lazyload.init(el, binding.value, defaultSrc);
            },
            // 当被绑定的元素插入到 DOM 中时
            inserted(el) {
                if(IntersectionObserver) {
                    Lazyload.observe(el)
                } else {
                    Lazyload.listenerScroll(el)
                }
            } 
        })
    },
    init(el, val, def) {
        el.setAttribute('data-src', val);
        el.setAttribute('src', def)
    },
    observe(el) {
        var io = new IntersectionObserver((entries) => {
            const realSrc = el.dataset.src; // to do ??? dataset
            if(entries[0].isIntersecting) {
                if(realSrc) {
                    el.src = realSrc;
                    el.removeAttribute('data-src')
                }
            }
        })
        io.observe(el)
    },
     // 监听scroll事件
    listenerScroll(el) {
        const handler = LazyLoad.throttle(LazyLoad.load, 300)
        LazyLoad.load(el)
        window.addEventListener('scroll', () => {
            handler(el)
        })
    },
    // 加载真实图片
    load(el) {
        const windowHeight = document.documentElement.clientHeight
        const elTop = el.getBoundingClientRect().top
        const elBtm = el.getBoundingClientRect().bottom
        const realSrc = el.dataset.src
        if (elTop - windowHeight < 0 && elBtm > 0) {
            if (realSrc) {
                el.src = realSrc
                el.removeAttribute('data-src')
            }
        }
    },
    // 节流
    throttle() {
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
}

export default LazyLoad;



/// 使用
<img v-LazyLoad="xxx.jpg" />