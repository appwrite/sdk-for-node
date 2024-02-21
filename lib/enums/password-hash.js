const PasswordHash = Object.freeze({
    Sha1: 'sha1' ,
    Sha224: 'sha224' ,
    Sha256: 'sha256' ,
    Sha384: 'sha384' ,
    Sha512224: 'sha512/224' ,
    Sha512256: 'sha512/256' ,
    Sha512: 'sha512' ,
    Sha3224: 'sha3-224' ,
    Sha3256: 'sha3-256' ,
    Sha3384: 'sha3-384' ,
    Sha3512: 'sha3-512' 
});

module.exports = PasswordHash;