import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstanats } from "./constants";

@Injectable({})
export class JwtStratergy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
            ignoreExpiration: false,
            sectetOrKey: jwtConstanats.secret
        })
    }

    async validate(payload: any) {
        console.log("This IS Validate Payload:: ", payload);
        return payload;
    }
}