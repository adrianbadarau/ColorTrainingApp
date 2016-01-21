/**
 * Created by adrianbadarau on 21/01/16.
 */
import {View, Component} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';

import {Posts} from 'collections/posts';

@Component({
    selector: 'post-show'
})

@View({
    templateUrl: 'client/posts/show/view.html',
    directives: [RouterLink]
})

export class PostsShow {
    post: Object;

    constructor(params : RouteParams){
        var post_id = params.get('post_id');
        this.post = Posts.findOne(post_id);
    }

    savePost(post){
        Posts.update(post._id, {
            $set:{
                name: post.name,
                description: post.description,
                location: post.location
            }
        });
    }
}