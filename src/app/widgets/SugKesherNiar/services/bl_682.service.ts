import { Proxy682Service } from './proxy_682.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class BL682Service {

    users : cmop.User[] = [];

    constructor(private proxy: Proxy682Service){}

    async getUsers(){
        this.users = await this.proxy.getUsers(10,'female');
    }
}