use czTls;
db.czTls.find({
    "certificate.signatureAlgorithm": "ecdsa-with-SHA256"
}).pretty();
