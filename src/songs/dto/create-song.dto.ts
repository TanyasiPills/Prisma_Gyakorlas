import { IsDefined, IsInt, IsISBN, IsNotEmpty, IsString, Min, Max } from "class-validator";
export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsNotEmpty()
    @IsString()
    artist: string;
  
    @IsNotEmpty()
    @IsInt()
    lenght: number;
  
    @IsNotEmpty()
    @IsInt()
    price: number;

    @IsNotEmpty()
    @IsInt()
    @Max(5)
    @Min(1)
    rating: number;
}
