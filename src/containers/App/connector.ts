import { connect } from "react-redux";
import { loadingData } from "../../redux/actions/ThunkActions";
import {
  selectHeaderAC,
  selectMenuAC,
  selectPriceAC
} from "../../redux/actions/ActionsCreator";
import { IState } from "../../redux/types";

const mapState = (state: IState) => ({
  status: state.app.status,
  data: state.data.loadData,
  selectedHeader: state.data.selectedHeader,
  selectedMenu: state.data.selectedMenu,
  selectedPrice: state.data.selectedPrice
});

const mapDispatch = {
  _loadingData: loadingData,
  _selectHeaderAC: selectHeaderAC,
  _selectMenuAC: selectMenuAC,
  _selectPriceAC: selectPriceAC
};

export const connector = connect(mapState, mapDispatch);
