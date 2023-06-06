import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn: "root"
})
export class userShareService {

    constructor(){}

    public user : User;

getEmail(){
    return this.user.email;
}

setUser(user: User){
    this.user=user;
}

getUser(){
    return this.user;
}

}

