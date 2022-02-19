function laodImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onlaod = function() {
            resolve(img);
        }
        img.onerror = function() {
            reject(new Error('could not load img at' + url))
        }
        img.src = url
    })
}