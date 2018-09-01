import { connect } from "react-redux";
import ToolBarComponent from "../components/tool-bar/tool-bar";

const mapStateToProps = (state: any) => ({
    toolBarButtons: state.toolBar.toolBarButtons
});

const mapDispatchToProps = (dispatch: any) => ({

});


export const ToolBarContianer = connect
    (mapStateToProps, mapDispatchToProps)
    (ToolBarComponent);