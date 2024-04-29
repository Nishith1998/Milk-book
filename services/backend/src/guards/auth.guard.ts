import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard as JwtAuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends JwtAuthGuard('jwt') {
  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   console.log("req:: ", this.getRequest(context))
  //   const result = (await super.canActivate(context)) as boolean;
  //   const ctx = GqlExecutionContext.create(context);
  //   // return ctx.getContext().req;
  //   await super.logIn(ctx.getContext().req);
  //   return result;
  // }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
