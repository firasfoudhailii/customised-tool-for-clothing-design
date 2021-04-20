

export default (prototypes = [], action) => {
    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...prototypes, action.payload];

        default:
            return prototypes;
    }
}
