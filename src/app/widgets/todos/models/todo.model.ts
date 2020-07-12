let count = 0;

export class TaskModel {
    id: number;
    constructor(
        public description : string ,
        public isDone : boolean = false ){
            this.id = count++;
    }
}

