import actionsType from './actionsType';

const updateSelectedPostalCode = value => ({
    type: actionsType.SET_SELECTED_POSTAL_CODE,
    value,
});

export default updateSelectedPostalCode;
