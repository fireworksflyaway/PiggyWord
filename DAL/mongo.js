/**
 * Created by ImageDBUser on 2017/3/14.
 */
var MongoClient=require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/piggyword';

exports.insertData=function (colName, data, callback) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("connected");
        let collection=db.collection(colName);
        collection.insert(data, function (err, result) {
            if(err)
            {
                console.log('Error:'+err);
                callback({suc:false, err:err});
                db.close();
                return;
            }
            callback({suc:true});
            db.close();
        })
    })

}

// exports.selectData=function (colName, query, callback) {
//     MongoClient.connect(DB_CONN_STR, function (err, db) {
//         let collection=db.collection(colName);
//         collection.find(query).toArray(function (err, result) {
//             if(err)
//             {
//                 console.log('Error:'+err);
//                 callback({suc:false, err:err});
//                 db.close();
//                 return;
//             }
//             callback({suc:true, result:result});
//             db.close();
//         })
//     })
// }

exports.selectData=function (colName, query, resolve, reject) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let collection=db.collection(colName);
        collection.find(query).toArray(function (err, result) {
            db.close();
            if(err)
                reject(err);
            else
                resolve(result);
        })
    })
}


exports.updateData=function (colName, query, update, callback) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let collection=db.collection(colName);
        collection.update(query, update, function (err, obj) {
            if(err)
            {
                console.log('Error:'+err);
                callback({suc:false, err:err});
                db.close();
                return;
            }
            callback({suc:true});
            db.close();
        })
    })
}