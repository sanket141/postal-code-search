import updateSelectedPostalCode from './index';
import actionsType from './actionsType';

describe('actions', () => {
    test('updateSelectedPostalCode should return an action object with correct type and value', () => {
        const expectedAction = {
            type: actionsType.SET_SELECTED_POSTAL_CODE,
            value: '360002',
        };
        expect(updateSelectedPostalCode('360002')).toEqual(expectedAction);
    });
});
