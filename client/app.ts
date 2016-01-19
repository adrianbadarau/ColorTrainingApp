import {Component, View, NgZone} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';

import {Posts} from '../collections/posts'
import {PostsForm} from '../client/posts/posts-form'

@Component({
    selector: 'app'
})

@View({
    templateUrl: '/client/app.html',
    directives: [PostsForm]
})

class ColorTraining {
    posts: Mongo.Cursor<>;
    constructor(){
        this.posts = Posts.find();
    }

    removePost(post){
        Posts.remove(post._id);
    }
}

bootstrap(ColorTraining);