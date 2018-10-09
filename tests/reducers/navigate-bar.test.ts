// import { createShowSettingsModalAction, createCloseSettingsModalAction } from './../../src/base/actions/base/navigate-bar';
// import navigateBar from './../../src/base/reducers/base/app';
// import 'mocha';

// import { expect } from 'chai';

// describe('Test settings modal', function () {
//     it('should show settings modal', function () {
//         const state = { isSettingsModalVisable: false };
//         const action = createShowSettingsModalAction();
//         const resultState = navigateBar(state, action);
//         expect(resultState.isSettingsModalVisable).to.equal(true);
//     });

//     it('should close settings modal', function () {
//         const state = { isSettingsModalVisable: true };
//         const action = createCloseSettingsModalAction();
//         const resultState = navigateBar(state, action);
//         expect(resultState.isSettingsModalVisable).to.equal(false);
//     });
// })