const template = (err, res)=>{
    if(err){
        console.log(err.message);
        return {status:400, message: err.message};
    }
    console.log(res);
    return {status: 200, message:res};
}

module.exports = template;