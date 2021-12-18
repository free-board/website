import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Fragment>{props.children}</Fragment>

      <Footer />
    </div>
  );
}
