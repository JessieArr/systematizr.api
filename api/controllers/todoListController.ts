var cache : any = {};

exports.list_all_tasks = function(req : any, res : any) {
    console.log("GET request to /tasks");
    res.json(cache);
};

exports.create_a_task = function(req : any, res : any) {
    var key = req.headers.key;
    var value = req.headers.value;
    console.log("POST request to /tasks with key: " + key)
    cache[key] = value;
    res.json(value);
};


exports.read_a_task = function(req : any, res : any) {
    var key = req.params.key;
    console.log("GET request to /tasks with key: " + key);
    res.json(cache[key]);
};


exports.update_a_task = function(req : any, res : any) {
    res.json({"test": "test"});
};


exports.delete_a_task = function(req : any, res : any) {
    res.json({ message: 'Task successfully deleted' });
};