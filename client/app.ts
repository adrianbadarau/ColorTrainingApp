import {Component, View, NgZone,provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {PostsIndex} from "client/posts/index/posts-index";
import {PostsShow} from "client/posts/show/posts-show"

@Component({
    selector: 'app'
})

@View({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path:'/',
        as:'PostsIndex',
        component:PostsIndex
    },
    {
        path:'/posts/:post_id',
        as: 'PostsShow',
        component:PostsShow
    }
])

class ColorTraining {

}

bootstrap(ColorTraining, [ROUTER_PROVIDERS, provide(APP_BASE_HREF,{useValue:'/'})]);