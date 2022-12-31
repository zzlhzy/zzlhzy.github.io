validation.addEventListener('click', () => {
    let validation = document.getElementById('validation');
    let psdJudge = document.getElementById('psdJudge');
    let length = psd.value.length;
    if (length >= 6 && length <= 16) {
        psdJudge.innerHTML = '输入正确信息'
        setTimeout(1000)
        window.open("zzlhzy.github.io/hzy.html");
    }else {
        psdJudge.innerHTML = '错误信息';
    }
})