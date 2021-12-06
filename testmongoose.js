const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name: String,
    age:Number,
    health:String,
}
const mydata =mongoose.model('cats',schema);
mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})