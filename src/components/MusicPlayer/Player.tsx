import AudioPlayer, { InterfacePlacement, InterfaceGridTemplateArea } from 'react-modern-audio-player';
import { playList } from "./playList.ts";

const interfaceGridTemplateArea: InterfaceGridTemplateArea<6> = {
    repeatType: "row1-1",
    playButton: "row1-2",
    progress: "row1-3",
    volume: "row1-4",
    trackInfo: "row1-5",
}

const interfacePlacement: InterfacePlacement = {
    templateArea: interfaceGridTemplateArea
}

export default function Player () {

	return (
		<AudioPlayer
            audioInitialState={{
                repeatType: "SHUFFLE",
                curPlayId: 1,
            }}
            playList={playList}
            activeUI={{
                playButton: true,
                prevNnext: true,
                volume: true,
                volumeSlider: true,
                repeatType: true,
                trackInfo: true,
                progress: "bar",
            }}
            placement={{
                player: "bottom",
                interface: interfacePlacement,
            }}
            rootContainerProps={{
                colorScheme: "dark",
            }}/>
        )
}