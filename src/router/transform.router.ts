import execSpawn from '../util/util'
import { Router } from 'restify-router'
const transformRoute = new Router()

transformRoute.get('/transform/webmtomp4', async (req, res) => {
    try {

        let arg = [
            '-i',
            'videos/video.webm',
            'videoResults/webmtomp4.mp4'
        ]

        execSpawn(arg)

        return res.json({ dsd: ':V' })

    } catch (error) {
        return res.json({ succes: false, error: true })
    }
})


transformRoute.get('/transform/mp4towebm', async (req, res) => {
    try {

        let arg = [
            '-i',
            'videos/video.mp4',
            'videoResults/mp4towebm.webm'
        ]

        execSpawn(arg)

    } catch (error) {
        return res.json({ succes: false, error: true })
    }
})


transformRoute.get('/transform/mutevideos', async (req, res) => {
    try {

        let dataVideo = [
            { nameVideo: 'video.mp4', nameVideoMute: 'mutevideo.mp4' },
            { nameVideo: 'video.webm', nameVideoMute: 'mutevideo.webm' }
        ]

        dataVideo.map((d) => {

            let arg = [
                '-i',
                `videos/${d.nameVideo}`,
                '-c:v',
                'copy',
                '-an',
                `videoResults/${d.nameVideoMute}`
            ]
            execSpawn(arg)
        })

        return res.json({ succes: false, error: true })

    } catch (error) {
        return res.json({ succes: false, error: true })
    }
})

export default transformRoute