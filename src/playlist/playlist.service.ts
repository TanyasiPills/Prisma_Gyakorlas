import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlaylistService {

  db: PrismaService;

  constructor(db: PrismaService){
    this.db = db;
  }

  create(createPlaylistDto: CreatePlaylistDto) {
    return this.db.playlist.create({data: createPlaylistDto});
  }



  findOne(id: number) {
    return {
      name: this.db.playlist.findFirst({where: {id}, include: {songs: true}}),
    };
  }
  async PostSong(id: number, songid: number) {
    try{
      return await this.db.playlist.update({where: {id}, data: {songs: {connect: {id: songid}}}, include: {songs: true}});
    }
    catch{return undefined;}
  }
  async deleteList(id: number){
    try{
      return await this.db.playlist.delete({where: {id}});
    }
    catch{return undefined;}
  }
  async deleteSong(id: number, songid: number){
    try{
      return await this.db.playlist.update({where: {id}, data: {songs: {disconnect: {id: songid}}}});
    }
    catch{return undefined;}
  }
}
