const {v4:uuid} = require("uuid");
const {format} = require("date-fns");
console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'));
console.log("hello");
console.log(uuid());