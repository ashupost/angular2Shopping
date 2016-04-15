export class DataService {
    private _data = ["Mritunjay", "Sapna", "Kumar"];
    getRandomData(){
        return this._data[Math.floor(Math.random() * this._data.length)];
    }
    insertData(value: string){
        this._data.push(value);
    }
}