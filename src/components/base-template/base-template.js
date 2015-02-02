define(['text!./base-template.html', 'knockout'],
    function(template, ko) {
        'use strict';
        
        var ViewModel = function (params, componentInfo) {
            var self = this;
            self.components = params.page.components;
        };

        return {
            viewModel: {
                createViewModel: function(params, componentInfo) {
                    return new ViewModel(params, componentInfo);
                }
            },
            template: template
        };
    });