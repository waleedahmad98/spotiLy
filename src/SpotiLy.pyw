import sys
from SwSpotify import spotify, SpotifyClosed

while True:
    input()
    try:
        print(spotify.current())
        sys.stdout.flush()
    except:
        print(e)