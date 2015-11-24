module.exports = {

    sayHi: function() {
        console.log("hi");
    },
    getCipherInfos: function(cipher) {
        for (var i = 0; i < this.ciphers.length; i++) {
            if (this.ciphers[i].cipher === cipher) {
                return this.ciphers[i];
            }
        }
    },
    ciphers : [
        {
            "cipher": "ECDHE-RSA-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-AES256-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA384",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-AES256-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "AES(256)",
            "mac": "SHA384",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-DSS-AES-256-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "DSS",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-RSA-AES-256-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-AES-256-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "SRP",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "DSS",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "RSA",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-AES256-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-AES256-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "DSS",
            "enc": "AES(256)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-CAMELLIA256-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "Camellia(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-CAMELLIA256-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "Camellia(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "AECDH-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "None",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "None",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ADH-AES256-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "None",
            "enc": "AES(256)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "ADH-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-CAMELLIA256-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "Camellia(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-AES256-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "AES(256)",
            "mac": "SHA384",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-AES256-SHA384",
            "protocol": "TLSv1.2",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "AES(256)",
            "mac": "SHA384",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-AES256-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "AES256-GCM-SHA384",
            "protocol": "TLSv1.2",
            "kx": "RSA",
            "au": "RSA",
            "enc": "AESGCM(256)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "AES256-SHA256",
            "protocol": "TLSv1.2",
            "kx": "RSA",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "AES256-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "CAMELLIA256-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "Camellia(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "PSK-AES256-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "PSK",
            "au": "PSK",
            "enc": "AES(256)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-DSS-3DES-EDE-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "DSS",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-RSA-3DES-EDE-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "RSA",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-3DES-EDE-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "SRP",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "EDH-RSA-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "EDH-DSS-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "AECDH-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "None",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DES-CBC3-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "PSK-3DES-EDE-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "PSK",
            "au": "PSK",
            "enc": "3DES(168)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-DSS-AES-128-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "DSS",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-RSA-AES-128-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SRP-AES-128-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "SRP",
            "au": "SRP",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "DSS",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "RSA",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "DSS",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-SEED-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "SEED(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-SEED-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "SEED(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-RSA-CAMELLIA128-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "Camellia(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DHE-DSS-CAMELLIA128-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "Camellia(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "AECDH-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "None",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "None",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ADH-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "DH",
            "au": "None",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "ADH-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-SEED-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "SEED(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-CAMELLIA128-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "Camellia(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-AES128-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "AES128-GCM-SHA256",
            "protocol": "TLSv1.2",
            "kx": "RSA",
            "au": "RSA",
            "enc": "AESGCM(128)",
            "mac": "AEAD",
            "export": "false"
        },
        {
            "cipher": "AES128-SHA256",
            "protocol": "TLSv1.2",
            "kx": "RSA",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA256",
            "export": "false"
        },
        {
            "cipher": "AES128-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "SEED-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "SEED(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "CAMELLIA128-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "Camellia(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "PSK-AES128-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "PSK",
            "au": "PSK",
            "enc": "AES(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-RSA-RC4-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "RSA",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDHE-ECDSA-RC4-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "ECDSA",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "AECDH-RC4-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH",
            "au": "None",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-RC4-MD5",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "RC4(128)",
            "mac": "MD5",
            "export": "false"
        },
        {
            "cipher": "ECDH-RSA-RC4-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/RSA",
            "au": "ECDH",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ECDH-ECDSA-RC4-SHA",
            "protocol": "SSLv3",
            "kx": "ECDH/ECDSA",
            "au": "ECDH",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "RC4-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "RC4-MD5",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "RC4(128)",
            "mac": "MD5",
            "export": "false"
        },
        {
            "cipher": "PSK-RC4-SHA",
            "protocol": "SSLv3",
            "kx": "PSK",
            "au": "PSK",
            "enc": "RC4(128)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "EDH-RSA-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "RSA",
            "enc": "DES(56)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "EDH-DSS-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "DSS",
            "enc": "DES(56)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "ADH-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "DH",
            "au": "None",
            "enc": "DES(56)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "RSA",
            "au": "RSA",
            "enc": "DES(56)",
            "mac": "SHA1",
            "export": "false"
        },
        {
            "cipher": "EXP-EDH-RSA-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "DH(512)",
            "au": "RSA",
            "enc": "DES(40)",
            "mac": "SHA1",
            "export": "true"
        },
        {
            "cipher": "EXP-EDH-DSS-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "DH(512)",
            "au": "DSS",
            "enc": "DES(40)",
            "mac": "SHA1",
            "export": "true"
        },
        {
            "cipher": "EXP-ADH-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "DH(512)",
            "au": "None",
            "enc": "DES(40)",
            "mac": "SHA1",
            "export": "true"
        },
        {
            "cipher": "EXP-DES-CBC-SHA",
            "protocol": "SSLv3",
            "kx": "RSA(512)",
            "au": "RSA",
            "enc": "DES(40)",
            "mac": "SHA1",
            "export": "true"
        },
        {
            "cipher": "EXP-RC2-CBC-MD5",
            "protocol": "SSLv3",
            "kx": "RSA(512)",
            "au": "RSA",
            "enc": "RC2(40)",
            "mac": "MD5",
            "export": "true"
        },
        {
            "cipher": "EXP-ADH-RC4-MD5",
            "protocol": "SSLv3",
            "kx": "DH(512)",
            "au": "None",
            "enc": "RC4(40)",
            "mac": "MD5",
            "export": "true"
        },
        {
            "cipher": "EXP-RC4-MD5",
            "protocol": "SSLv3",
            "kx": "RSA(512)",
            "au": "RSA",
            "enc": "RC4(40)",
            "mac": "MD5",
            "export": "true"
        }
    ]
};
