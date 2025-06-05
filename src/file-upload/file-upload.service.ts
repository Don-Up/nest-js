import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { join } from 'node:path/win32';
import * as fs from "node:fs";
import { UserService } from "../user/user.service";

@Injectable()
export class FileUploadService {

  constructor(
    // Use forwardRef to handle circular dependencies
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {
  }
  async saveFile(file: Express.Multer.File): Promise<string> {
    const uploadPath = join(__dirname, '..', '..', 'uploads');

    if (!fs.existsSync(uploadPath)){
      fs.mkdirSync(uploadPath, {recursive: true})
    }

    return `/uploads/${file.filename}`
  }

  async saveUserAvatar(userId: number, file: Express.Multer.File){
    // save the file and get the path
    const filePath = await this.saveFile(file);

    const user = await this.userService.findUserById(userId)
    if(user.avatar){
      const oldAvatarPath = join(__dirname, '..', '..', user.avatar);
      if(fs.existsSync(oldAvatarPath)){
        fs.unlinkSync(oldAvatarPath)
      }
    }

    await this.userService.updateUserAvatar(userId, filePath);
    return filePath
  }

}
