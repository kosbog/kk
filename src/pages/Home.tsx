import * as React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { CatalogItem } from "src/components/CatalogItem";
import { Header, Icon } from "semantic-ui-react";

export const Home = observer(() => {
  return (
    <div className="catalog catalog-wrapper">
      {Array.from("123".repeat(3)).map((item, idx) => {
        return (
          <Link
            to={`catalog/all/${item}`}
            className="catalog-item-link-wrapper"
            key={idx}
          >
            <CatalogItem id={item} category={"all"} isPage={false} />
          </Link>
        );
      })}
      <Link to={`/catalog/all`} className="catalog-item-link-wrapper go">
        <Header as="h4" icon>
          <Icon name="arrow right" />
          Check them all
        </Header>
      </Link>
    </div>
  );
});
