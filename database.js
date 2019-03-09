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

  // 查询七天前的数据
  queryDate(day){
    var date = this.getDate(day);
    return this.get(date)||[]
  }

  getDate(days){
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    var someday = last.getFullYear()+'-'+(last.getMonth()+1)+'-'+last.getDate();
    return someday;
  }

}

module.exports = DataStore