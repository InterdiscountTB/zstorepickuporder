sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zstorepickupordertest/test/integration/FirstJourney',
		'zstorepickupordertest/test/integration/pages/ZC_StorePickupOrder_TestList',
		'zstorepickupordertest/test/integration/pages/ZC_StorePickupOrder_TestObjectPage',
		'zstorepickupordertest/test/integration/pages/ZC_STOREPICKUPORDERITEM_TESTObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_StorePickupOrder_TestList, ZC_StorePickupOrder_TestObjectPage, ZC_STOREPICKUPORDERITEM_TESTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zstorepickupordertest') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_StorePickupOrder_TestList: ZC_StorePickupOrder_TestList,
					onTheZC_StorePickupOrder_TestObjectPage: ZC_StorePickupOrder_TestObjectPage,
					onTheZC_STOREPICKUPORDERITEM_TESTObjectPage: ZC_STOREPICKUPORDERITEM_TESTObjectPage
                }
            },
            opaJourney.run
        );
    }
);