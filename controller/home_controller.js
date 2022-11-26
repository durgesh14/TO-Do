module.exports.home = function(req, res, next){

 // Sending title and tashList value to ejs file.
  res.render('homepage',{
    title: 'To-Do',
    taskList: res.locals.todo
    
  });
}