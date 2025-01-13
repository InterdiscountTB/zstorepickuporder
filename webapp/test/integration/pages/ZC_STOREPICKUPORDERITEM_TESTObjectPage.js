sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zstorepickupordertest',
            componentId: 'ZC_STOREPICKUPORDERITEM_TESTObjectPage',
            contextPath: '/ZC_StorePickupOrder_Test/_StorePickupOrderItem'
        },
        CustomPageDefinitions
    );
});