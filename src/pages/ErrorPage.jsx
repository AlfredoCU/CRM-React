import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2 className="text-center text-2xl text-red-600">
        CRM Administrador de clientes
      </h2>
      <p className="text-center">Ocurrio un error inesperado</p>
      <p className="text-center">{error.message}</p>
    </div>
  );
};

export default ErrorPage;
