import initialState from 'initialState';
import reducer from './index';
import actionsType from './actions/actionsType';

describe('reducer', () => {
    test('should set the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('should set correct selectedPostalCode state for SET_SELECTED_POSTAL_CODE action', () => {
        expect(
            reducer({}, {
                type: actionsType.SET_SELECTED_POSTAL_CODE,
                value: '360002',
            }),
        ).toEqual({
            selectedPostalCode: '360002',
        });
    });
});
