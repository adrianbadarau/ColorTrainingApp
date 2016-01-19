/**
 * Created by adrianbadarau on 19/01/16.
 */
import {Posts} from 'collections/posts';

export function seedPosts(){
    if(Posts.find().count() === 0){
        var posts = [
            {
                'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'location': 'Palo Alto'
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'location': 'Palo Alto'
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'location': 'San Francisco'
            }
        ];

        for(var i=0; i<=posts.length; i++){
            Posts.insert(posts[i]);
        }
    }
}

