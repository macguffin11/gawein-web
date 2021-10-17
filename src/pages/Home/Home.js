import React from "react";
import "../../App.css";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import caroesel from "../../assets/caroesel.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={caroesel}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-block">
                            <h1>Gawein Aja</h1>
                            <hr />
                            <p>
                                Situs freelance, jasa dan produk digital yang
                                mempertemukan pihak pencari jasa dengan para
                                freelancer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section1" className="container mt-4">
                <div className="row justify-content-center align-items-center px-4 px-md-0">
                    <div className="col-md-4 col-9 p-4">
                        <img
                            src="https://drive.google.com/uc?id=1tS5F83No-pNAWEZMurWVyc0RT7NdfdxY"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-md-7 offset-md-1 text-center text-md-start mt-5 mt-md-0">
                        <h1>Apa itu Website Gawein?</h1>
                        <p className="lead text-justify">
                            GaweIn adalah situs freelance, jasa dan produk
                            digital yang mempertemukan pihak pencari jasa dengan
                            para freelancer. Didirikan pada Februari 2020,
                            GaweIn menyediakan tempat untuk para pencari kerja
                            dan pebisnis yang membutuhkan jasa dari setiap
                            jurusan dan berbagai bidang kategori pekerjaan.
                            Selain mendapatkan proyek dan menawarkan jasa,
                            pengguna situs juga dapat melakukan transaksi
                            jual-beli produk digital.
                        </p>
                    </div>
                </div>
            </div>
            <div id="section2" className="mt-5 pt-4 pb-5">
                <div className="container">
                    <div className="row text-center mb-5 mt-3">
                        <h1>Mengapa Gawein Aja?</h1>
                    </div>
                    <div className="row px-4 px-md-0">
                        <div className="card__wrap--outer">
                            <div className="col col-12 col-md-4 card__wrap--inner">
                                <div className="card__main text-center">
                                    <div className="card__item">
                                        <h1>Aman</h1>
                                    </div>
                                    <div className="card__item  flexible">
                                        <p className="lead text-justify">
                                            Jaminan User terverifikasi merupakan
                                            civitas akademika POLBAN.
                                        </p>
                                        <p className="lead text-justify">
                                            Memiliki tim bantuan untuk
                                            menyelesaikan permasalahan project
                                            yang terjadi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-4 card__wrap--inner">
                                <div className="card__main text-center">
                                    <div className="card__item">
                                        <h1>Jelas</h1>
                                    </div>
                                    <div className="card__item flexible">
                                        <p className="lead text-justify">
                                            Semua detail pekerjaan, deskripsi,
                                            deadline sudah disepakati sejak
                                            awal.
                                        </p>
                                        <p className="lead text-justify">
                                            Sistem penilaian yang transparan,
                                            memudahkan semua pihak dalam
                                            menentukan pilihan dan terhindar
                                            dari penipuan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-4 card__wrap--inner">
                                <div className="card__main text-center">
                                    <div className="card__item">
                                        <h1>Akurat</h1>
                                    </div>
                                    <div className="card__item flexible">
                                        <p className="lead text-justify">
                                            Owner bisa mencari tenaga ahli di
                                            bidangnya dengan cepat & benar
                                            karena adanya kategori.
                                        </p>
                                        <p className="lead text-justify">
                                            Worker bisa mendapatkan pekerjaan
                                            yang sesuai dengan bidangnya.
                                        </p>
                                        <p className="lead text-justify">
                                            Owner hanya membayar biaya yang
                                            sudah disepakati
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section3" className="mt-5 pt-1 pb-5">
                <div className="container">
                    <div className="row text-center mb-5 mt-3">
                        <h1>Bagaimana Cara Kerja?</h1>
                    </div>
                    <div className="row px-4 px-md-0">
                        <div className="card__wrap--outer">
                            <div className="col col-12 col-md-6 card__wrap--inner">
                                <div className="card__main text-center">
                                    <div className="card__item">
                                        <h1>
                                            <i className="fas fa-briefcase me-2"></i>
                                            OWNER
                                        </h1>
                                    </div>
                                    <div className="card__item  flexible">
                                        <p className="lead text-justify">
                                            Melakukan publish project dengan
                                            spesifikasi yang jelas (Judul,
                                            deskripsi, kategori dan deadline).
                                        </p>
                                        <p className="lead text-justify">
                                            Melakukan pemilihan Worker /
                                            freelancer.
                                        </p>
                                        <p className="lead text-justify">
                                            Transfer ke rekening perusahaan
                                            GaweIn Aja.
                                        </p>
                                        <p className="lead text-justify">
                                            Terima hasil dari Worker.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 card__wrap--inner">
                                <div className="card__main text-center">
                                    <div className="card__item">
                                        <h1>
                                            <i className="fas fa-handshake me-2"></i>
                                            WORKER
                                        </h1>
                                    </div>
                                    <div className="card__item flexible">
                                        <p className="lead text-justify">
                                            Melakukan pencarian project.
                                        </p>
                                        <p className="lead text-justify">
                                            Mengajukan penawaran.
                                        </p>
                                        <p className="lead text-justify">
                                            Mengerjakan project dan upload.
                                        </p>
                                        <p className="lead text-justify">
                                            Terima hasil dari Owner.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer" className="mt-5 pt-1 pb-0">
                <div className="container-fluid mx-0">
                    <div className="container py-4">
                        <div className="row justify-content-between footer-body">
                            <div className="col-12 col-md-5">
                                <h5 className="widget-title">
                                    Contact Us<span></span>
                                </h5>
                                <hr />
                                <p>
                                    <i className="fas fa-user me-2"></i>Gina
                                    Melinia - WP Penjualan.
                                </p>
                                <p>
                                    <i className="fas fa-mobile-alt me-2"></i>
                                    +6282321570639
                                </p>
                                <p>
                                    <i className="fas fa-user me-2"></i>Adhitya
                                    Febhiakbar - Chief Marketing Officer.
                                </p>
                                <p>
                                    <i className="fas fa-mobile-alt me-2"></i>
                                    +6282262465487
                                </p>
                                <p>
                                    <i className="fab fa-instagram me-2"></i>
                                    @gawein
                                </p>
                            </div>

                            <div className="col-12 col-md-5 offset-md-2">
                                <h5 className="widget-title">
                                    Subscribe<span></span>
                                </h5>
                                <hr />
                                <form autocomplete="off" className="form-group">
                                    <label className="form-label">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder=" "
                                        />
                                        <span class="input-label">Name</span>
                                    </label>
                                    <label className="form-label">
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                        />
                                        <span class="input-label">
                                            Email Address
                                        </span>
                                    </label>
                                    <button
                                        className="btn btn-outline-light"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-around footer-copyright">
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright Gawein Aja © 2020. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
