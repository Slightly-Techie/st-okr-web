import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type PageWrapperProps = {
  title: string;
  favicon_url?: string;
  children: ReactNode;
};


function PageWrapper({ ...props }: PageWrapperProps) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <link rel="icon" type="image/svg+xml" href={props.favicon_url || ""} />
      </Helmet>
      {props.children}
    </>
  );
}

export default PageWrapper;
