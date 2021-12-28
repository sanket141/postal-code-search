module.exports = {
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./src/'],
                alias: {
                    actions: './src/js/reduxStore/actions',
                    initialState: './src/js/reduxStore/initialState',
                    postalCodeData: './src/js/data/postal_code_locations.json',
                },
            },
        ],
    ],
    presets: [
        '@babel/env',
        '@babel/react',
    ],
};
