/**
 * Created by ImageDBUser on 2017/3/13.
 */
var Mongo=require('../DAL/mongo');
var uuid=require('node-uuid');
var crypto=require('crypto');


function updateToken(username, callback) {
    let token=uuid.v4();
    Mongo.updateData('user',{username:username},{$set:{token:token}},function (obj) {
        callback(obj, token);
    });
}


exports.signOut=function (req,res) {
    delete req.session.user;
}


exports.confirmToken=function (req,res) {
    if(req.session.user)
    {
        res.send({suc:true});
        return;
    }

    let username=req.cookies.username;
    let token=req.cookies.token;
    if(username&&token)
    {
        Mongo.selectData('user',{username:username},function (obj) {
            if(obj.suc)
            {
                if(obj.result.length===1)
                {
                    let md5= crypto.createHash('md5');
                    md5.update(username+obj.result[0].password);
                    let ptoken=md5.digest('hex');
                    if(ptoken==token)
                    {
                        res.send({suc:true});
                        console.log("confirm token successfully");
                        return;
                    }
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
    let {username,password,isRemember}=req.body;
    let data={username};
    let promise=new Promise(function (resolve,reject) {
        Mongo.selectData('user',data,resolve,reject)
    });
    promise.then(result=>{
        if(result.length==1){
            let md5=crypto.createHash('md5');
            md5.update(password+result[0].salt);
            if(result[0].password===md5.digest('hex'))
            {
                req.session.user=username;
                res.cookie('username',username);
                if(isRemember)
                {
                    md5=crypto.createHash('md5');
                    md5.update(username+result[0].password);
                    res.cookie('token',md5.digest('hex'),{expires: new Date(Date.now()+100000000)});
                    res.cookie('username',username,{expires: new Date(Date.now()+100000000)});
                }
                res.send({suc:true})
            }
            else
                res.send({suc:false, err:'Incorrect password!'});
        }
        else
            res.send({suc:false,err:'Invalid username!'});
    }).catch(err=>{
            res.send({suc:false,err});
    });

}

exports.signUp=function (req,res) {
    let data={};
    ({username:data.username, password:data.password, email:data.email, isRemember:isRemember}=req.body);
    data.salt=uuid.v4();
    let md5=crypto.createHash('md5');
    md5.update(data.password+data.salt);
    data.password=md5.digest('hex');
    Mongo.insertData('user', data, function (obj) {
        if(obj.suc){
            req.session.user=data.username;
            res.cookie('username',data.username);
            res.send({suc:true});
        }
        else
            res.send({suc:false, err:obj.err.errmsg});
    })
}