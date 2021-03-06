define(['knockout-utilities', 'router', 'modaler', 'fresque'],
    function(knockoutUtilities, router, modaler, fresque) {
    	'use strict';
        
        var Components = function(){};

        Components.prototype.registerComponents = function(){
        	//Register components, dialogs & pages here
        	
        	fresque.registerTemplate('base');
        	
        	router.registerPage('not-found', {
        	   url: 'page-non-trouvee',
        	   htmlOnly: true
        	});
        	
        	knockoutUtilities.registerComponent('fresque-placeholder', {
        	    basePath: 'bower_components/fresque.js/dist/components/'
        	});
        	
        	knockoutUtilities.registerComponent('test-component');
        	knockoutUtilities.registerComponent('test2-component');
        	
        	modaler.registerModal('initializing', {
                title: 'Initializing',
                htmlOnly: true,
                backdrop: 'static',
                keyboard: false
        	});
         	// [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

        };

        return new Components();
    });
