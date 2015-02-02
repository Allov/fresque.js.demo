define(['text!./test2-component.html', 'knockout'],
    function(template, ko) {
        'use strict';
        
        var ViewModel = function (params, componentInfo) {
            var self = this;
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