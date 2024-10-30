import AudioPlayer from 'react-modern-audio-player';
import { playList } from "./playList.ts";

export default function Player () {

	return (
		<AudioPlayer
            playList={playList}
            activeUI={{
                playButton: true,
                prevNnext: true,
                volume: true,
                volumeSlider: true,
                repeatType: true,
                trackTime: true,
                trackInfo: true,
                progress: "bar",
            }}
            placement={{
                player: "bottom"
            }}/>
        )
}