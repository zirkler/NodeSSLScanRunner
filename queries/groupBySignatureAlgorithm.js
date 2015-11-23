use czTls;
db.scans.aggregate([
    {
        $group: {
            _id: "$certificate.publicKeyAlgorithm",
            sum: {$sum: 1}
        }
    }
]).pretty();
