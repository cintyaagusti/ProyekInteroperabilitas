import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { getBuku } from './api/requestapi'; //mengakses ke file requestapi.js 

class App extends React.Component { //knp class, krn web yg akan dibuat sifatnya dinamis. React.Component utk mengakses line 1
                                  //render utk 'nge-build' html di dalamnya

state = {
  dataBuku: []  //json disimpan di sini
}

componentDidMount(){  //ketika ada perubahan data, dia bakal menjalankan code di bawahnya lalu dirender ulang
  this.fetchBuku();
}

fetchBuku () {
  getBuku () 
  .then (data=>{
    console.log(data);
    const bukuHandle = data.items;    //bikin variabel bukuHandle 
    this.setState({   
    //SetState utk mengubah isi wadah yg akan dirender. State adalah wadah untuk menyimpan data yg dipanggil dan akan merender ulang line 10. 
    //State hanya bisa di class itu saja. Tdk bisa dipakai di class lain.
      dataBuku: bukuHandle
    })
  }) 

  
}

render () {
  const { dataBuku } = this.state;  //destruktur. dataBuku akan mengambil wadah (state) yg akan dipakai di code bawahnya                     
  console.log(dataBuku)
  return (
    <div className="App">
      <section id="mu-hero">
      <div className="container">
            <br></br>
            <br></br> 
            <br></br>
            <br></br>
        <div className="row">
        <div className="mu-hero-left">
            
            <img src="assets/images/buku.png" alt="buku logo img"/>
            {/* <br></br> */}
            <br></br>
            <br></br>
              <h2> Where books are only one click away. Enjoy!</h2>
              <p > Halaman ini akan menampilkan list buku dengan kata kunci 'Indonesia'. Dan kamu
                  bisa langsung membacaya E-Booknya. </p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
              {/* <span> Silakan lakukan request kepada Admin untuk bisa menampilkan buku yang kamu inginkan :) </span> */}
            </div>


        </div>
      </div>
    </section>
    <section id="mu-book-overview">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-book-overview-area">

            <div className="mu-heading-area">
              <h2 className="mu-heading-title">Book Overview</h2>
              <span className="mu-header-dot"></span>
              <p> Akan menampilkan list buku pilihan untuk menemani hari-harimu</p>
            </div>

            <div className="mu-book-overview-content">
              <div className="row">
            
                  { dataBuku && //pakai kurung kurawal spy bisa menyisipkan syntax JS. 
                                //&& jika data buku true, maka akan menjalankan kode dibawahnya
                    dataBuku.map(data =>  //MAP fungsinya sama spt for. Mengulang array (dataBuku) dan menyimpan setiap array di data
                      <a href={data.accessInfo.webReaderLink}>
                        <div className="col-md-3 col-sm-6">
                          <div className="mu-book-overview-single" style={{height:'550px',backgroundColor:'none'}}>
                            <span className="mu-book-overview-icon-box">
                              <img src={data.volumeInfo.imageLinks.thumbnail} style={{height:'200px' }} alt="" />
                            </span>
                            
                            <h4 style={{color:'black', fontSize:'20px', marginBottom:'20px', overflow:'hidden'}}>{data.volumeInfo.title}  </h4>
                            <p>{}</p>
                            <div className="description" style={{textAlign:'left'}}>
                            
                            <p><b> Penerbit        :</b> {data.volumeInfo.publisher}</p> 
                            <p><b> Tanggal Rilis   :</b> {data.volumeInfo.publishedDate}</p> 
                            <p><b> Jumlah Halaman  :</b> {data.volumeInfo.pageCount}</p>
                            </div>
                            
                          </div>
                        </div>
                      </a>
                    )
                  }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

}

export default App;
