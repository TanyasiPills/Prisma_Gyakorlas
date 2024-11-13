import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {

  db: PrismaService;

  constructor(db: PrismaService){
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return this.db.song.create({data: createSongDto});
  }

  findAll() {
    return this.db.song.findMany();
  }

  findOne(id: number) {
    return this.db.song.findFirst({where: {id}});
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    return await this.db.song.update({where: {id}, data: UpdateSongDto});
  }

  async remove(id: number) {
    try{
      return await this.db.song.delete({where: {id}});
    }
    catch{return undefined;}
  }

  findFree(){
    return this.db.song.findMany({where: {price: 0}})
  }

  findTop(count: number){
    return this.db.song.findMany({orderBy: {rating: 'desc'}, take: count});
  }

  async findArtists(){
    const content = await this.db.song.groupBy({by: ['artist'], _count: {artist: true}, orderBy: {_count: {artist: 'desc'}}});
    return content.map(item => ({artist: item.artist,numberOfSongs: item._count.artist}));
  }
}
