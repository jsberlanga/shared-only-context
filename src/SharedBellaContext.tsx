import * as React from "react";

const SharedBellaContext = React.createContext<{ isBellaPageType?: boolean }>({
  isBellaPageType: undefined,
});

export { SharedBellaContext };
