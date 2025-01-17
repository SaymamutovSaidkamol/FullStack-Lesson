class JwtServices{
    #accessKey;
    #refreshKey;
    constructor(accessKey, refreshKey){
        this.#accessKey = accessKey;
        this.#refreshKey = refreshKey
    }

    accessToken(payload){
        return jwt.sign(payload, this.))
    }
}