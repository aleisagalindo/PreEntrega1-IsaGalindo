import React from "react";
import images from "../media/img/images";

const ProductsSection = () => {
  return (
    <>
      <section className="container col-12 container-productos">
        <div className="row">
          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-1"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Onix Ring
                <p className="precio-producto">$5.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Onix Ring<i className="material-icons right">close</i>
              </span>
              <p>Anillo bañado en oro con piedra onix natural.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-2"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Pearl Hoops
                <p className="precio-producto">$3.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Pearl Hoops<i className="material-icons right">close</i>
              </span>
              <p>Aros de perlas naturales con enganches de oro.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-3"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Set Magno
                <p className="precio-producto">$11.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Set Magno<i className="material-icons right">close</i>
              </span>
              <p>Pack de collares bañados en oro con chapa grabada.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-4"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Europe Ring
                <p className="precio-producto">$6.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Europe Ring<i className="material-icons right">close</i>
              </span>
              <p>Anillo bañado en oro con perla natural.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-6"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Tear Ring
                <p className="precio-producto">$2.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Tear Ring<i className="material-icons right">close</i>
              </span>
              <p>Anillo bañado en oro estilo derretido.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-5"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                C Hoops
                <p className="precio-producto">$1.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                C Hoops<i className="material-icons right">close</i>
              </span>
              <p>Aros enchapados con forma de C.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-7"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Afrodita
                <p className="precio-producto">$7.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Afrodita Necklace<i className="material-icons right">close</i>
              </span>
              <p>Collar de perlas con cadena y chapas bañadas en oro.</p>
            </div>
          </div>

          <div className="card small col-4 card-indiv">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator img-producto" src={images["img-8"]} />
            </div>
            <div className="card-content">
              <span className="card-title activator">
                Jade Ring
                <p className="precio-producto">$5.500</p>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Add to cart</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Jade Ring<i className="material-icons right">close</i>
              </span>
              <p>Anillo de piedra Jade natural.</p>
            </div>
          </div>
        </div>
        <button className="boton-ver-mas">Ver más</button>
      </section>
    </>
  );
};

export default ProductsSection;
