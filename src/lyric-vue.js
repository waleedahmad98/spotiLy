Vue.component('lyrics', {
    template: `
    <div id = "main-container">
        <div v-if="loading">
            <h1>fetching lyrics...</h1>
        </div>
        <div v-if="!loading">
            <button @click="refresh()">Refresh</button>
            <div title>
                <h2>{{title}}</h2>
                <h3>{{artist}}</h3>
            </div>
            <div id="lyics-container">
                <div v-for="l in lyrics">{{ l }}</div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            title: '',
            artist: '',
            lyrics: [],
            loading: false
        }

    },
    mounted: function() {
        window.runPy(this.success, this.error);
        this.refresh();
    },
    methods: {
        refresh: function() {
            this.loading = true;
            window.refresh();
        },
        success: function({ title, artist, lyrics }) {
            this.title = title;
            this.artist = artist;
            this.lyrics = lyrics.split('\n');
            this.loading = false;
        },
        error: function({ status }) {
            console.error(status);
            this.loading = false;
            this.title = "Spotify is " + status;
        }
    }
})
new Vue({
    el: '#lyric-parent'
})