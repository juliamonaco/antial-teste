import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../pages/_layout/default";
import AuthLayout from "../pages/_layout/auth"
import Blank from "../pages/_layout/_blank"

import { store } from '../store'

const RouteWrapper = ({
  component: Component,
  isPrivate = false,
  layout,
  title,
  ...rest
}) => {
  const { signed } = store.getState().auth

  if (!signed && isPrivate) {
    return <Redirect to="/entrar" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = ({ children }) => {
    if(isPrivate && !layout){
      return <DefaultLayout>{children}</DefaultLayout>
    } else if(layout === "blank"){
    return <Blank>{children}</Blank>
    } else {
      return <AuthLayout>{children}</AuthLayout>
    }
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...rest} title={title}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default RouteWrapper