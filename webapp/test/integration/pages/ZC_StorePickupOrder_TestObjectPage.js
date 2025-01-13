sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zstorepickupordertest',
            componentId: 'ZC_StorePickupOrder_TestObjectPage',
            contextPath: '/ZC_StorePickupOrder_Test'
        },
        CustomPageDefinitions
    );
});