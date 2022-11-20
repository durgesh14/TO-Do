module.exports.home = function(req, res){

  console.log("Array updated: ", res.locals.taskList)
  res.render('homepage',{
    title: 'To-Do',
    taskList: res.locals.taskList
  });
}