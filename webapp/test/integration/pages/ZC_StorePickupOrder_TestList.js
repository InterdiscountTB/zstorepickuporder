sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zstorepickupordertest',
            componentId: 'ZC_StorePickupOrder_TestList',
            contextPath: '/ZC_StorePickupOrder_Test'
        },
        CustomPageDefinitions
    );
});