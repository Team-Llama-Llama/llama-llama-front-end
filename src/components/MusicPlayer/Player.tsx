import AudioPlayer, { InterfaceGridTemplateArea } from 'react-modern-audio-player';
import { playList } from "./playList.ts";

export default function Player () {

    const interfacePlacement:InterfaceGridTemplateArea = {
        trackInfo: "row1-9",
        progress: "row1-5",
        playButton: "row1-6",
        repeatType: "row1-7",
        volume: "row1-8"
      }

	return (
		<AudioPlayer 
            playList={playList}
            activeUI={{
                playButton: true,
                prevNnext: true,
                volume: true,
                volumeSlider: true,
                repeatType: true,
                trackInfo: true,
                progress: "bar"
            }}
            placement={{
                interface: {
                    templateArea: interfacePlacement
                },
            }}
            rootContainerProps={{
                width: '20%',
                height: '5%'
            }}/>
        )
}