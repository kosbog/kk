import * as React from "react";
import { observer } from "mobx-react-lite";
import { CatalogItem } from "src/components/CatalogItem";
import { Link, RouteComponentProps } from "react-router-dom";

interface CatalogProps extends RouteComponentProps<null> {
  isPage?: boolean;
}

export const Catalog = observer(
  ({ isPage, match: { url }, ...rest }: CatalogProps) => {
    console.log(rest);
    const data = Array.from("123456789".repeat(4));

    React.useEffect(() => window.scrollTo(0, 0));

    return (
      <div className="catalog catalog-wrapper">
        {data.map((item, idx) => {
          return (
            <Link to={`${url}/${item}`} className="catalog-item-link-wrapper">
              <CatalogItem id={item} key={idx} />
            </Link>
          );
        })}
      </div>
    );
  }
);
