/** @format */

import React, { ReactNode, cloneElement, ReactElement } from "react";

export function ButtonAction({ children }: { children: ReactElement }) {
  if (React.isValidElement(children)) {
    return cloneElement(children as any, {
      onClick: () => console.log("hello"),
    });
  } else {
    return children;
  }
}
