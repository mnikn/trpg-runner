import { connect } from "react-redux";
import ToolBarComponent from "../components/tool-bar/tool-bar";
import { IRootState } from "../reducers";

const mapStateToProps = (state: IRootState) => ({
    toolBarButtons: state.app.toolBarButtons
});

const mapDispatchToProps = (dispatch: any) => ({

});


export const ToolBarContianer = connect
    (mapStateToProps, mapDispatchToProps)
    (ToolBarComponent);