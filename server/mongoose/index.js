const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://t_ogonowski:8ig3hG2bc07cqlCa@divcraft-blog.ra0sm.mongodb.net/divcraft-blog?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}, () => {
   console.log('mongoose is running...')
})

module.exports = mongoose