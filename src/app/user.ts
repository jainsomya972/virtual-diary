import { Entry } from './entry';

export class User {
    penName: string;
    password: string;
    entries: Map<string, Entry>;

    constructor(penName:string, password: string){
        this.penName = penName;
        this.password = password;
        this.entries = new Map<string, Entry>();
    }
}
