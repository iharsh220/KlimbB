const MongoClient = require("./MongoClient");

require('dotenv').config();

module.exports = {

    PostData: async (body) => {

        return new Promise(async function (resolve, reject) {

            var connect = await MongoClient.MongoClientConnect();

            const result = await connect.dbo.collection(process.env.COLLECTION).insertMany(body);

            if (result.acknowledged === true) {
                resolve({ message: "ok", status: 200, condition: true });
                connect.db.close();
            }


        }).catch((err) => {
            
            return err;
        })
    },
    GetFilterData: async (id) => {

        return new Promise(async function (resolve, reject) {

            var connect = await MongoClient.MongoClientConnect();

            const result = await connect.dbo.collection(process.env.COLLECTION).findOne({ id: id });

            if (result != null) {

                resolve({ message: "ok", status: 200, condition: true, data: result });


            } else {

                resolve({ message: "Not Found", status: 404, condition: false });

            }

            connect.db.close();


        }).catch((err) => {
            
            return err;
        })
    },
    UpdateData: async (req) => {

        return new Promise(async function (resolve, reject) {

            var connect = await MongoClient.MongoClientConnect();

            var myquery = { id: req.params.id };
            var newvalues = {
                $set: req.body
            };
            const result = await connect.dbo.collection(process.env.COLLECTION).updateOne(myquery, newvalues);

            console.log(result);
            if (result.modifiedCount === 0) {
                resolve({ message: "Not Found", status: 404, condition: false });
            }

            resolve({ message: "ok", status: 200, condition: true, data: result });

            connect.db.close();


        }).catch((err) => {
            
            return err;
        })
    },
    DeleteData: async (id) => {

        return new Promise(async function (resolve, reject) {

            var connect = await MongoClient.MongoClientConnect();

            var myquery = { id: id };

            const result = await connect.dbo.collection(process.env.COLLECTION).deleteOne(myquery);

            if (result.deletedCount === 0) {
                resolve({ message: "Not Found", status: 404, condition: false });
            }

            resolve({ message: "ok", status: 200, condition: true, data: result });
            connect.db.close();

        }).catch((err) => {
            
            return err;
        })
    }

}