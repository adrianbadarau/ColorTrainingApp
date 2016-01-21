/**
 * Created by adrianbadarau on 21/01/16.
 */
import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {PostsForm} from 'client/posts/forms/posts-form';
import {Posts} from 'collections/posts';

@Component({
    selector: 'posts-index'
})

@View({
    templateUrl: 'client/posts/index/view.html',
    directives: [PostsForm, RouterLink]
})

export class PostsIndex {
    posts:Mongo.Cursor<Object>;

    constructor() {
        this.posts = Posts.find();
    }

    removePost(post) {
        Posts.remove(post._id);
    }
}