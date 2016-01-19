/**
 * Created by adrianbadarau on 20/01/16.
 */

import {Component, View} from 'angular2/core';
import {ControlGroup,FormBuilder,Validators, Control} from 'angular2/common'
import {Posts} from "../../collections/posts";

@Component({
    selector: 'posts-form'
})

@View({
    templateUrl: "client/posts/posts-form.html"
})

export class PostsForm {
    postsForm: ControlGroup;
    constructor(){
        var fb = new FormBuilder();
        this.postsForm = fb.group({
            name:['', Validators.required],
            description:[''],
            location:['', Validators.required]
        })
    }

    addPost(post){
        if(this.postsForm.valid){
            Posts.insert({
                name: post.name,
                description: post.description,
                location: post.location
            });
            (<Control>this.postsForm.controls['name']).updateValue("");
            (<Control>this.postsForm.controls['description']).updateValue("");
            (<Control>this.postsForm.controls['location']).updateValue("");
        }
    }
}
