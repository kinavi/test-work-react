import React, { useEffect, useMemo, useState } from "react";
import "../../styles.css";
import { connector } from "./connector";
import { AppPropsType } from "./types";
import { Loader } from "../../components/Loader";
import { HeaderItem } from "../../components/HeaderItem";
import { MenuItemsSelect } from "../../components/MenuItemsSelect";
import { Header, SubHeader } from "./style";
import { PriceItem } from "../../components/PriceItem";

export const App = (props: AppPropsType) => {
  const {
    status,
    data,
    selectedHeader,
    selectedMenu,
    selectedPrice,
    _loadingData,
    _selectHeaderAC,
    _selectMenuAC,
    _selectPriceAC
  } = props;
  const headerItems = data;

  useEffect(() => {
    _loadingData();
  }, []);

  const showMenu = selectedHeader !== null;

  const menuData = useMemo(() => {
    return headerItems.find((item) => item.id === selectedHeader)?.items || [];
  }, [headerItems, selectedHeader]);

  const showPrice = selectedMenu !== null;

  const priceData = useMemo(() => {
    return menuData.find((item) => item.id === selectedMenu)?.items || [];
  }, [menuData, selectedMenu]);

  const renderBody = () => (
    <>
      <Header>
        {headerItems.map((item, index) => (
          <HeaderItem
            key={`header-item-${item.id}`}
            {...item}
            index={index}
            onClick={_selectHeaderAC}
            isChecked={item.id === selectedHeader}
          />
        ))}
      </Header>
      <SubHeader>
        {showMenu && (
          <MenuItemsSelect
            value={selectedMenu}
            onSelect={_selectMenuAC}
            options={menuData}
          />
        )}
      </SubHeader>
      {showPrice &&
        priceData.map((item, index) => (
          <PriceItem
            key={`price-item-${item.id}`}
            {...item}
            index={index}
            onClick={_selectPriceAC}
            isChecked={item.id === selectedPrice}
          />
        ))}
    </>
  );

  return (
    <div className="App">
      {status === "loading" && <Loader />}
      {status === "ready" && renderBody()}
    </div>
  );
};

export const AppWithState = connector(App);
