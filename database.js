const Store = require('electron-store');

class DataStore extends Store{
  constructor (settings){
    super(settings)
    this.data = this.get(this.today())||[]
  }

  today(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
  }

  saveDatas(){
    this.set(this.today(),this.data);
  }


  getDatas(){
    this.data = this.get(this.today())||[]
    return this
  }

  addDatas(item){
      this.data = [...this.data, item]
      return this.saveDatas();
  }

  deleteData(item){
    this.data = this.data.filter(t =>t !=item)
    return this.saveDatas();
  }

}

module.exports = DataStore