import { Song } from "@prisma/client";
import { IsDefined, IsInt, IsISBN, IsNotEmpty, IsString, Min, Max } from "class-validator";

export class CreatePlaylistDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
