const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

var url = process.env.MONGOURL;


module.exports = {

    MongoClientConnect: async () => {

        return new Promise(function (resolve, reject) {

            const client = new MongoClient(url, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });

            const dbo = client.db(process.env.DB);

            resolve({ dbo: dbo, db: client });

        }).catch(err => {
            console.log(err);
            return err;
        });

    }

}


