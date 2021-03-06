function lazyload() {
    const imgs = document.getElementsByTagName('img')
    const len = img.length;
    //视口高度
    const viewHeight = document.documentElement.clientHeight;
    //滚动条高度
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < len; i++) {
        const offsetHeight = imgs[i].offsetTop;
        if (offsetHeight < viewHeight + scrollHeight) {
            const src = imgs[i].dataset.src;
            imgs[i].src = src;
        }
    }
}
window.addEventListener('scroll', lazyload);