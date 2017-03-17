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
    return;

    //let token=req.cookies.token;
    // if(username&&token)
    // {
    //     Mongo.selectData('user',{username:username},function (obj) {
    //         if(obj.suc)
    //         {
    //             if(obj.result.length===1)
    //             {
    //                 let md5= crypto.createHash('md5');
    //                 md5.update(obj.result[0].password);
    //                 let ptoken=md5.digest('hex');
    //                 if(ptoken==token)
    //                 {
    //                     res.send({suc:true});
    //                     console.log("confirm token successfully");
    //                     return;
    //                 }
    //             }
    //         }
    //         res.send({suc:false, err: obj.err});
    //         console.log("Error:"+obj.err);
    //     })
    // }
    // else
    // {
    //     res.send({suc:false, err: 'Error: unable to obtain cookie'});
    //     console.log("Error: unable to obtain cookie");
    // }
}


exports.signIn=function (req, res) {
    let username=req.body.username;
    let password=req.body.password;
    let data={"username":username};
    Mongo.selectData('user',data,function (obj) {
        if(obj.suc)
        {
            if(obj.result.length===1){
                let md5=crypto.createHash('md5');
                md5.update(password+obj.result[0].salt);
                if(obj.result[0].password===md5.digest('hex'))
                {
                    req.session.user=username;
                    res.cookie('username',username);
                    res.send({suc:true})
                }
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