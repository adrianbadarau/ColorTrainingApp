import {Component, View, NgZone} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';

import {Posts} from '../collections/posts'

@Component({
    selector: 'app'
})

@View({
    templateUrl: '/client/app.html'
})

class ColorTraining {
    posts: Mongo.Cursor<Object>;
    constructor(){
        this.posts = Posts.find();
    }
}

bootstrap(ColorTraining);