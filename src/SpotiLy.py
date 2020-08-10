import sys
import json
from SwSpotify import spotify, SpotifyClosed, SpotifyPaused, SpotifyNotRunning
from gtagger import gTagger

def main():
    while True:
        gt = gTagger(None)
        input()
        try:
            title, artist = spotify.current()
            _, lyrics = gt._gTagger__get_genius_data(f'{title} {artist}', None)
            response = {"ok": True, "title" : title, "artist": artist, "lyrics": lyrics}
        except SpotifyClosed as e:
            response = {"ok": False, "status": "Closed"}
        except SpotifyPaused as e:
            response = {"ok": False, "status": "Paused"}
        except SpotifyNotRunning as e:
            response = {"ok": False, "status": "Not Running"}

        print(json.dumps(response))
        sys.stdout.flush()

if __name__ == '__main__':
    main()