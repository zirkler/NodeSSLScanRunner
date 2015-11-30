use czTls;
db.domains.aggregate([
    {
        $group: {
            _id: "$domain",
            sum: {$sum: 1}
        }
    },
    {
        $match: {
            sum: {$gt: 1}
        }
    }

]).pretty();
