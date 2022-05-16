import { ForbiddenException, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase-auth') {}

@Injectable()
export class AdminAuthGuard extends AuthGuard('firebase-auth') {
  handleRequest(err, user, info: Error) {
    if (!user.admin) throw new ForbiddenException('Access Denied: Admin Only')

    return user
  }
}
