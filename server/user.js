/**
 * Created by ImageDBUser on 2017/3/13.
 */
var Mongo=require('../DAL/mongo');
var uuid=require('node-uuid');


function updateToken(username, callback) {
    let token=uuid.v4();
    Mongo.updateData('user',{username:username},{$set:{token:token}},function (obj) {
        callback(obj, token);
    });
}

exports.confirmToken=function (req,res) {
    let username=req.cookies.username;
    let token=req.cookies.token;
    if(username&&token)
    {
        Mongo.selectData('user',{username:username,token:token},function (obj) {
            if(obj.suc)
            {
                if(obj.result.length===1)
                {
                    res.send({suc:true});
                    console.log("confirm token successfully");
                    return;
                }
            }
            res.send({suc:false, err: obj.err});
            console.log("Error:"+obj.err);
        })
    }
    else
    {
        res.send({suc:false, err: 'Error: unable to obtain cookie'});
        console.log("Error: unable to obtain cookie");
    }
}


exports.signIn=function (req, res) {
    let username=req.body.username;
    let password=req.body.password;
    let data={"username":username,"password":password};
    Mongo.selectData('user',data,function (obj) {
        if(obj.suc)
        {
            if(obj.result.length===1){
                updateToken(username,function (obj, token) {
                    if(obj.suc)
                    {
                        res.cookie('token',token);
                        res.send({suc:true})
                        console.log('update token successfully')
                    }
                    else
                    {
                        res.send({suc:false, err: 'Error: Failed to update token'});
                        console.log(obj.err.errmsg);
                    }
                })
            }
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
    data.token=uuid.v4();
    Mongo.insertData('user', data, function (obj) {
        if(obj.suc){
            res.cookie('token',data.token);
            res.send({suc:true});
        }
        else
            res.send({suc:false, err:obj.err.errmsg});
    })
}