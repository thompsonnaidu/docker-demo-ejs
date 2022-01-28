/*
	GET /
*/
exports.main = function(req, res){
        console.log("Request has been made to / and the environment variable", JSON.stringify(process.env));
        res.render('main.html',{env:JSON.stringify(process.env)});
}