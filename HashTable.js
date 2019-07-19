class HashTable {

    constructor(){
        this.table=[];
    }

    hashKey(key){
        let hash = 0;
        for(let i=0; i<key.length; i++) {

            let code = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + code | 0;

        }

        return hash;

    }

    get(key){

        let address = this.hashKey(key);

        return this.table[address];

    }

    set(key, value){
        console.log(key);
        let address = this.hashKey(key);
        console.log(address);
        this.table[address]=value;

    }

    showTable() {
      for (const key in this.table) {
        if(this.table[key] !== undefined) {
          console.log(key, ' : ', this.table[key]);
        }
      }
    }

    remove(key){
        let address = this.hashKey(key);

        if (this.table[address]) {
            delete this.table[address];
        }

    }

}
