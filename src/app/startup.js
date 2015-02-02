define([
        'knockout',
        './components',
        './knockout-configurator',
        'router',
        'dialoger',
        'modaler',
        'fresque'
    ],
    function(ko, components, knockoutConfigurator, router, dialoger, modaler, fresque) {
        'use strict';

        components.registerComponents();
        
        knockoutConfigurator.configure();

        ko.applyBindings({
            router: router,
            dialoger: dialoger,
            modaler: modaler
        });
        
        dialoger.init();
        modaler.init();

        modaler.showModal('initializing');
        fresque.init().done(function() {
            modaler.hideCurrentModal();
            router.init();
        });
    });
