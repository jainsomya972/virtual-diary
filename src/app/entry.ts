export class Entry {
    date: Date;
    title: string;
    emotion: string;
    note: string;

    constructor();
    constructor(date: Date, title: string, emotion: string);
    
    constructor(date? : Date, title? : string, emotion? : string){
        this.date = date || new Date();
        this.title = title || "";
        this.emotion = emotion || "very happy";
    }

}
