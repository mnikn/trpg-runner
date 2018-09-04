import { connect } from "react-redux";
import NavigateComponent from "../components/navigate/navigate";
import { Dispatch } from "redux";
import { createInitToolBarButtonsAction } from "../actions/base/tool-bar";

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onNavigating: (navigateLocation: string) => {
        dispatch(createInitToolBarButtonsAction(navigateLocation));
    }
});


export const NavigateContainer = connect
    (mapStateToProps, mapDispatchToProps)
    (NavigateComponent);