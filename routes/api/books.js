const db = require('../models/index.js');

module.exports = function(app){
  app.post('/save',async (req,res) => {
    console.log(`in post route`);
    console.log(req.body);
    const {id,title,author,description,img,link} = req.body;
    try{
      await db.Book.create({
        id:id,
        title:title,
        author: author,
        description: description,
        img: img,
        link: link
      })
      res.redirect(`/${id}`);
    }
    catch(error){
      console.log(error);
      res.error(error);
    }
  });

  app.delete('/save',async (req,res) => {
    console.log(`in delete route`);
    await db.Book.findByIdAndDelete({
      'id':req.body.id
    })
  });
}