import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Controller('playlists')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(createPlaylistDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistService.findOne(+id);
  }
  @Delete(':id/')
  deleteList(@Param('id') id: string) {
    return this.playlistService.deleteList(+id);
  }
  @Post(':id/:songid')
  addSong(@Param('id') id: string, @Param('songid') songid: string) {
    return this.playlistService.PostSong(+id, +songid);
  }
  @Delete(':id/:songid')
  deleteSong(@Param('id') id: string, @Param('songid') songid: string) {
    return this.playlistService.deleteSong(+id, +songid);
  }
}
