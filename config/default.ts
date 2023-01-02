import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    dbURI : process.env.DB_URI || 'mongodb://localhost:27017/test',
    saltWorkFactor: 10,
    accessTokenTTL: '30m',
    refreshTokenTTL: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAI5u29ZeZFKs0A4pqHkWE3wqLY+DP0GD
2AcGN2WdCHT73G6wa9aQNKqNvZ2iRwoH8YLPkaMV9EMbgz+vIRHw3MMCAwEAAQ==
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIBPAIBAAJBAI5u29ZeZFKs0A4pqHkWE3wqLY+DP0GD2AcGN2WdCHT73G6wa9aQ
NKqNvZ2iRwoH8YLPkaMV9EMbgz+vIRHw3MMCAwEAAQJAaBvR5mQCUofsX53FfhRL
08MEoFSfxOR439GEZmqcxtxGdM3XesSGBWSDMldsmYa3Z1JCqFwO5/OGqp92gnh2
oQIhAMKgruhamtL5HE8m/XYn13HXgdG2kZYIsWdeMhM+TwkzAiEAu1jDxXWpwgbk
ls0/XP2u7jp20ck4eCLw1Ml6AzKTfjECIQCtcEet4+AIldm2Z4aDXqnNV0Dmw40l
aIW/GeAB6grApQIhAJsYdiIPMbU2HaGWU0F5posEDX/JNJ2IV5XhIchp417RAiEA
ly2xvRUkjTCtM2TjTXOCqLAX86Nc1Ac6pFgUllBmkpI=
-----END RSA PRIVATE KEY-----`
}