import { connect } from "react-redux";
import NavigateComponent from "../components/navigate/navigate";
import { initToolBarButtons } from "../actions/base/tool-bar";
import { Dispatch } from "redux";

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onNavigating: (navigateLocation: string) => {
        dispatch(initToolBarButtons(navigateLocation));
    }
});


export const NavigateContainer = connect
    (mapStateToProps, mapDispatchToProps)
    (NavigateComponent);