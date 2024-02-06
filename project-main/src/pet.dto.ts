import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePetDTO {
    @IsNotEmpty()
    name :string;

    @IsNotEmpty()
    price : number;

    @IsNotEmpty()
    type : string;

    // @IsNotEmpty()
    // ownerId : number;

    @IsNotEmpty()
    status : string;

}
export class UpdatePetDTO {
    
    @IsNotEmpty()
    id : number;

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    color : string;

    //optionsl
    description? : string;
}

export class CreatePurcaseorderDTO {
    
    @IsNotEmpty()
    @IsString()
    user_id : number;

    @IsNotEmpty()
    pet_id : number;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;
}

export class UpdatePurchaseorderDTO {
    @IsNotEmpty()
    @IsString()
    purchase_user : string;

    @IsNotEmpty()
    pet : string;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;   
}
export class UpdatePetBaseEntityDTO {
    @IsNotEmpty()
    @IsString()
    id : number;
}
export class CreatePetBaseEntityDTO{
    @IsNotEmpty()
    @IsString()
    id : string; 
}
export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    first_name : string;   

    @IsNotEmpty()
    last_name : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    @IsString()
    roles: string[];

    @IsNotEmpty()
    is_admin : boolean;
}
export class UpdateUserDTO{
    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    first_name : string;   

    @IsNotEmpty()
    last_name : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    @IsString()
    roles: string[];


    @IsNotEmpty()
    is_admin : boolean;
}
