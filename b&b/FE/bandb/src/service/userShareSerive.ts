import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn: "root"
})
export class userShareService {

    constructor(){}

    public user : User;
    public adminUser : User = new User;
getEmail(){
    return this.user.email;
}

setUser(user: User){
    this.user=user;
}

getUser(){
    return this.user;
}

getAdminEmail(){
    return this.adminUser.email;
}

setAdminEmail(emailPassed: string){
    this.adminUser.email=emailPassed;
}

getAdminUser(){
    return this.adminUser;
}
}

