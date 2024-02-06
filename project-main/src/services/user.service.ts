import { Injectable,NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "src/entitices/user.entities";
import { CreateUserDTO, UpdateUserDTO } from "src/pet.dto";

@Injectable()
export class UserService {
    getstatus() : string{
        return "OK";
    }
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) {

    }
 
     findALL(): Promise<User[]> {
        return this.UserRepository.find();
    }
 

    findOne(id : number): Promise<User | null> {
        return this.UserRepository.findOneBy({id:id});
    }

    create(user : CreateUserDTO) : Promise<User|null> {
        return this.UserRepository.save(user);
    }
 
    async update(id: number, update : UpdateUserDTO) : Promise<User | null>{
        const usertoUpdate = await this.UserRepository.findOne({ where: { id: id } });
        if (!usertoUpdate) {
          throw new NotFoundException('User not found');
        }
        usertoUpdate.first_name = update.first_name;
        usertoUpdate.last_name = update.last_name;
        usertoUpdate.username = update.username;
        usertoUpdate.password = update.password;
        usertoUpdate.phone = update.phone;
        usertoUpdate.address = update.address;
        usertoUpdate.roles = update.roles;
        return await this.UserRepository.save(usertoUpdate);
      }
    async deleteById(id: number): Promise<void> {
        await this.UserRepository.delete(id);
}


}