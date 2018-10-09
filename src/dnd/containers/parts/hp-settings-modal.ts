import { IRootState } from './../../../base/reducers/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import HpSettingsModalComponent from '../../components/parts/hp-setttings-modal';
import { createDndChangeHpAssignTypeAction } from '../../../base/actions/dnd/dnd';
import { HpAssignType } from '../../../base/constants/dnd/hp-assign-type';

const mapStateToProps = (state: IRootState) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHpAssignTypeChange: (assignType: HpAssignType, hpValue: number) => {
        dispatch(createDndChangeHpAssignTypeAction(assignType, hpValue));
    }
});

export const HpSettingsModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HpSettingsModalComponent);