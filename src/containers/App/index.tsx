import React, { useEffect, useMemo, useState } from "react";
import "../../styles.css";
import { connector } from "./connector";
import { AppPropsType } from "./types";
import { Loader } from "../../components/Loader";
import { getGuid } from "../../utils/getGuid";
import { HeaderItem } from "../../components/HeaderItem";
import { MenuItemsSelect } from "../../components/MenuItemsSelect";
import { Header, SubHeader } from "./style";

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

  return (
    <div className="App">
      {status === "loading" && <Loader />}
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
      {showPrice && priceData.map((item) => item.name)}
    </div>
  );
};

export const AppWithState = connector(App);
