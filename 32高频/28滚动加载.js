window.addEventListener('scroll', function() {
    //视口高度
    const clientHeight = document.documentElement.clientHeight;
    //滚动条高度
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //页面总高度
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (clientHeight + scrollTop >= scrollHeight) {
        //todo
    }
}, false)