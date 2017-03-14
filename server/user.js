/**
 * Created by ImageDBUser on 2017/3/13.
 */
var Mongo=require('../DAL/mongo');

exports.signIn=function (req, res) {
    let username=req.body.username;
    let password=req.body.password;
    let data={"username":username,"password":password};
    Mongo.selectData('user',data,function (obj) {
        if(obj.suc)
        {
            if(obj.result.length===1)
                res.send({suc:true})
            else
                res.send({suc:false, err:'Error: No user or incorrect password'});
        }
        else
            res.send({suc:false,err:obj.err.errmsg});
    })
}

exports.signUp=function (req,res) {
    let data={};
    ({username:data.username, password:data.password, email:data.email}=req.body);
    Mongo.insertData('user', data, function (obj) {
        if(obj.suc)
            res.send({suc:true});
        else
            res.send({suc:false, err:obj.err.errmsg});
    })
}