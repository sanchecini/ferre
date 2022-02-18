import React from 'react'

export default function Content() {
    return (

        <div>

            <div>
                {/* Start Banner Hero */}
                <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={0} className="active" />
                        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={1} />
                        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row p-5">
                                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img className="img-fluid" src="img/herramienta.jpg" alt />
                                    </div>
                                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                                        <div className="text-align-left align-self-center">
                                            <h1 className="h1 text-success"><b>Ferremateriales</b> Del Bosque</h1>
                                            <h3 className="h2"> ¿Necesitas piezas nuevas? </h3>
                                            <p>
                                                Nosotros las tenemos, <a rel="sponsored" className="text-success" href="#" target="_blank">Materiales</a>,
                                                <a rel="sponsored" className="text-success" href="#" target="_blank">Herramientas</a> y
                                                <a rel="sponsored" className="text-success" href="#" target="_blank"> Impermiabilizantes</a>.

                                            </p>
                                            <a href="#" className='btn botones'> Saber mas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row p-5">
                                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img className="img-fluid" src="img/piezas.jpg" alt />
                                    </div>
                                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                                        <div className="text-align-left">
                                            <h1 className="h1 text-success"><b>Ferremateriales</b> Del Bosque</h1>
                                            <h3 className="h2"> ¿Necesitas piezas nuevas? </h3>
                                            <p>
                                                Nosotros las tenemos, <a rel="sponsored" className="text-success" href="#" target="_blank">Materiales</a>,
                                                <a rel="sponsored" className="text-success" href="#" target="_blank">Herramientas</a> y
                                                <a rel="sponsored" className="text-success" href="#" target="_blank"> Impermiabilizantes</a>.

                                            </p>
                                            <a href="#" className='btn botones'> Saber mas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row p-5">
                                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img className="img-fluid" src="img/impermiable.jpg" alt />
                                    </div>
                                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                                        <div className="text-align-left">
                                            <h1 className="h1 text-success"><b>Ferremateriales</b> Del Bosque</h1>
                                            <h3 className="h2"> ¿Necesitas piezas nuevas? </h3>
                                            <p>
                                                Nosotros las tenemos, <a rel="sponsored" className="text-success" href="#" target="_blank">Materiales</a>,
                                                <a rel="sponsored" className="text-success" href="#" target="_blank">Herramientas</a> y
                                                <a rel="sponsored" className="text-success" href="#" target="_blank"> Impermiabilizantes</a>.

                                            </p>
                                            <a href="#" className='btn botones'> Saber mas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                        <i className="fas fa-chevron-left" />
                    </a>
                    <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
                {/* End Banner Hero */}
                {/* Start Categories of The Month */}
                <section className="container py-5">
                    <div className="row text-center pt-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Categorias de nuestros productos</h1>
                            <p>
                                Nuestra prioridad es buscar siempre la mejor calidad, para ese proyecto que tanto esperas realizar.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 p-5 mt-3">
                            <a href="#"><img src="img/category_img_01.jpg" className="rounded-circle img-fluid border" /></a>
                            <h5 className="text-center mt-3 mb-3">Watches</h5>
                            <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                        </div>
                        <div className="col-12 col-md-3 p-5 mt-3">
                            <a href="#"><img src="img/category_img_01.jpg" className="rounded-circle img-fluid border" /></a>
                            <h5 className="text-center mt-3 mb-3">Watches</h5>
                            <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                        </div>
                        <div className="col-12 col-md-3 p-5 mt-3">
                            <a href="#"><img src="img/category_img_01.jpg" className="rounded-circle img-fluid border" /></a>
                            <h5 className="text-center mt-3 mb-3">Watches</h5>
                            <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                        </div>
                        <div className="col-12 col-md-3 p-5 mt-3">
                            <a href="#"><img src="img/category_img_02.jpg" className="rounded-circle img-fluid border" /></a>
                            <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                            <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                        </div>
                        <div className="col-12 col-md-3 p-5 mt-3">
                            <a href="#"><img src="img/category_img_03.jpg" className="rounded-circle img-fluid border" /></a>
                            <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                            <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                        </div>
                    </div>
                </section>
                {/* End Categories of The Month */}

                <div>
                    <section className="bg-light py-5">
                        <div className="container">
                            <div className="row align-items-center py-5">
                                <div className="col-md-8 text-normal">
                                    <h1 className='text-success'>Nosotros</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <img src="img/domicilio.png" style={{width: 400}} alt="About Hero" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Close Banner */}
                    {/* Start Section */}
                    <section className="container py-5">
                        <div className="row text-center pt-5 pb-3">
                            <div className="col-lg-6 m-auto ">
                                <h1 className="h1">Nuestros servicios</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3 pb-5">
                                <div className="h-100 py-5 services-icon-wap shadow rounded-circle">
                                    <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg" /></div>
                                    <h2 className="h5 mt-4 text-center">Envios</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-5">
                                <div className="h-100 py-5 services-icon-wap shadow">
                                    <div className="h1 text-success text-center"><i className="fas fa-certificate" /></div>
                                    <h2 className="h5 mt-4 text-center">La mejor calidad de la región</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-5">
                                <div className="h-100 py-5 services-icon-wap shadow">
                                    <div className="h1 text-success text-center"><i className="fa fa-percent" /></div>
                                    <h2 className="h5 mt-4 text-center">Promociones por mayores</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-5">
                                <div className="h-100 py-5 services-icon-wap shadow">
                                    <div className="h1 text-success text-center"><i className="fa fa-user" /></div>
                                    <h2 className="h5 mt-4 text-center">Servicio de Lunes a Sabado</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Section */}
                </div>





            </div>

        </div>



    )
}
