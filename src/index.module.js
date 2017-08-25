import angular from "angular";
import uiRouter from "angular-ui-router";
import { components } from "./components";
import { directives } from "./directives";
import { services } from "./services";

angular.module("myApp",[uiRouter, components, directives, services])
    .config(($stateProvider) => {
        $stateProvider
            .state({
                name: 'main',
                abstract: true,
                template: '<ui-view></ui-view>',
            })
    });