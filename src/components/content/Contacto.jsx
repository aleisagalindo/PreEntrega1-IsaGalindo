import React from "react";

const Contacto = () => {
  const datosFormulario = React.useRef();

  const consultarForm = (e) => {
    e.preventDefault();
    console.log(datosFormulario);
    const datForm = new FormData(datosFormulario.current)
    console.log(Object.fromEntries(datForm))
  };

  return (
    <>
      <div className="container container-form">
        <form onSubmit={consultarForm} ref={datosFormulario}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="nombre"
              className="form-control"
              name="nombre"
              aria-describedby="emailHelp"
            />
            <div name="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-3">
            <textarea
              name="consulta"
              rows={10}
              cols={50}
              defaultValue={"Escriba su consulta aquí"}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Formulario
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
