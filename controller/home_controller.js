module.exports.home = function(req, res, next){

 // console.log("Array updated: ", res.locals.todo)
  res.render('homepage',{
    title: 'To-Do',
    taskList: res.locals.todo
    
  });
}