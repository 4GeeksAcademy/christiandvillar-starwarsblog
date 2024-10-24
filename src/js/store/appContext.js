import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Inicializamos el contexto, su valor por defecto es null.
export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    // Inicializamos el estado usando `getState`, que define `store` y `actions`.
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      
      state.actions.loadPeople();
      state.actions.loadVehicles();
      state.actions.loadPlanets();
      
      // Si tienes más acciones a ejecutar al inicio, puedes llamarlas aquí
    }, []);

    // Retornamos el contexto con `store` y `actions` disponibles en toda la app
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;