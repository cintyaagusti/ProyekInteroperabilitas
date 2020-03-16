export function getBuku () {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:programming&key=AIzaSyAVVtSl1BdoLr-p7ybSnFCS1eX6cW-f9zA`;
    return fetch (url)
    .then(respon=>{		       	//untuk merespon dari API yg ditangkap tadi
        return respon.json();	//untuk mengembalikan hasil respon berupa json
    })
    .then(penerima=>{		    //ditangkap oleh var penerima
        return penerima;

    })
};
//mengeksport sebuah fungsi