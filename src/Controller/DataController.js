const {
    PostData,
    GetFilterData,
    UpdateData,
    DeleteData
} = require('../DB/MongoDB');
module.exports = {

    StoreData: async (req, res) => {

        try {

            if (Object.keys(req.body).length === 0) {
                console.log(req.body);
                return res.status(400).send({ message: "Content cannot be empty" });
            }

            res.send(await PostData(req.body));

        } catch (error) {
            res.send(error);
        }

    },
    FindData: async (req, res) => {

        try {

            if (!req.params.id) {
                return res.status(400).send({ message: "Content cannot be empty" });
            }

            res.send(await GetFilterData(req.params.id));

        } catch (error) {
            res.send(error);
        }

    },
    UpdateData: async (req, res) => {

        try {

            if (!req.params.id) {
                return res.status(400).send({ message: "Content cannot be empty" });
            }

            if (Object.keys(req.body).length === 0) {
                console.log(req.body);
                return res.status(400).send({ message: "Content cannot be empty" });
            }

            res.send(await UpdateData(req));

        } catch (error) {
            res.send(error);
        }

    },
    DeleteData: async (req, res) => {

        try {

            if (!req.params.id) {
                return res.status(400).send({ message: "Content cannot be empty" });
            }

            res.send(await DeleteData(req.params.id));

        } catch (error) {
            res.send(error);
        }

    },
}