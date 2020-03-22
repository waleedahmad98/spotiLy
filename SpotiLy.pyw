from SwSpotify import spotify, SpotifyNotRunning
from azapi import AZlyrics
from tkinter import *
import os

def displayLyrics(lyrics):
 master = Tk()
 master.geometry('500x600')
 master.title("SpotiLy")
# master.iconbitmap('logo.ico')
 scroll = Scrollbar(master)
 scroll.pack(side=RIGHT, fill=Y)
 eula = Text(master, wrap=NONE, yscrollcommand=scroll.set, font='Arial 12', height=100, bg='yellow')
 eula.tag_configure("center", justify='center')
 eula.insert(INSERT, song+"\n"+artist+"\n____________________\n\n"+lyrics, 'center')
 eula.pack(side="left")
 scroll.config(command=eula.yview)
 mainloop()

try:
 song=spotify.song()
 artist=spotify.artist()
except SpotifyNotRunning:
 print("ERROR: Spotify is not playing any music or is closed.")
 song="error"
 artist="error"
 lyrics="Spotify is not playing any music or is not running."
 displayLyrics(lyrics)
else:
 song=song.partition("(")[0]
 artist=artist.partition("(")[0]
 
 try: 
  lyrics=AZlyrics().getLyrics(artist=artist,title=song)
 except Exception:
  print("ERROR: Cannot find lyrics for this song.")
  lyrics="Cannot find lyrics for this song." 
 
 displayLyrics(lyrics)
 

