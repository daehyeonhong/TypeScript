{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetadata = Pick<Video, 'id' | 'title'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'htttps://..',
            data: 'byte-data..'
        }
    }

    function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'> {
        return {
            id,
            title: 'title'
        }
    }

}