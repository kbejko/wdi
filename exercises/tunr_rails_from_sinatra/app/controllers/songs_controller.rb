class SongsController < ApplicationController

  def index
    @songs = Song.all
  end

  def create
    @song = Song.create(params[:song])
    redirect_to("/songs/#{song.id}")
  end

  def new
  end

  def show
    @song = Song.find(params[:id])
  end

  def edit
    @song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
    @song.update(params[:song])
    redirect_to("/songs/#{@song.id}")
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    redirect_to("/songs")
  end

end
