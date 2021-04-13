function User(name, birhtday) {
    this.name = name;
    this.birhtday = birhtday;
    Object.defineProperty (this ,"age", {
        get (){
            let todayYear = new Date().getFullYear();
            return todayYear - this.birhtday.getFullYear()
  }
  });
}
let lusine = new User ("Lusine" ,new Date(1999,6, 20));
console.log(lusine.birhtday);
console.log(lusine.age);