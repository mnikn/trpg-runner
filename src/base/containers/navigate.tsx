import { connect } from "react-redux";
import NavigateComponent, { NAVIGATE_LOCATION } from "../components/navigate/navigate";
import { initPlayerCardListButtons, initHomeButtons } from "../../actions/base/tool-bar";

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    onNavigating: (navigateLocation: string) => {
        if (navigateLocation === NAVIGATE_LOCATION.COC_PLAYER_CARD){
            dispatch(initPlayerCardListButtons());
        } else {
            dispatch(initHomeButtons());
        }
    }
});


export const NavigateContainer = connect
    (mapStateToProps, mapDispatchToProps)
    (NavigateComponent);