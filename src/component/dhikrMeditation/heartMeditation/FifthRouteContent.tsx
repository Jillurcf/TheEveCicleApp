import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import VideoPlayer from 'react-native-video-player'

import Sound from 'react-native-sound'
import LottieView from 'lottie-react-native'
import tw from '../../../lib/tailwind'

type Props = {}
type AudioItemType = {
    id: string;
    title: string;
    duration: string;
    audio_url: string;
};
const FifthRouteContent = (props: Props) => {
    const [audioData, setAudioData] = useState<AudioItemType[]>([]);
    console.log(audioData?.duration, 'audioData');
    const [currentSound, setCurrentSound] = useState<Sound | null>(null);
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [remainingTime, setRemainingTime] = useState<{ [id: string]: number }>({});
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);


    useEffect(() => {
        const loadDurations = async () => {
            const updated = await Promise.all(
                data.map((item) => {
                    return new Promise<AudioItemType>((resolve) => {
                        if (item.audio_url) {
                            const sound = new Sound(item.audio_url, null, (error) => {
                                if (error) {
                                    console.log('Error loading audio:', error);
                                    resolve({ ...item, duration: '00:00' });
                                } else {
                                    const dur = Math.floor(sound.getDuration());
                                    const mins = Math.floor(dur / 60);
                                    const secs = dur % 60;
                                    const formatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
                                    sound.release();
                                    resolve({ ...item, duration: formatted });
                                }
                            });
                        } else {
                            resolve({ ...item, duration: '' });
                        }
                    });
                })
            );
            setAudioData(updated);
        };

        loadDurations();
    }, []);

    // const fetchAudioList = async () => {
    //     try {
    //       const response = await fetch('https://your-backend.com/api/audio');
    //       const data = await response.json();

    //       const withDurations: AudioItemType[] = await Promise.all(
    //         data.map(
    //           (item: AudioItemType) =>
    //             new Promise<AudioItemType>((resolve) => {
    //               const sound = new Sound(item.audio_url, null, (error) => {
    //                 if (error) {
    //                   console.error('Failed to load sound:', error);
    //                   resolve({ ...item, duration: '00:00' });
    //                 } else {
    //                   const durationInSec = Math.floor(sound.getDuration());
    //                   const mins = Math.floor(durationInSec / 60);
    //                   const secs = durationInSec % 60;
    //                   const formattedDuration = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    //                   resolve({ ...item, duration: formattedDuration });
    //                   sound.release(); // Important to release after use
    //                 }
    //               });
    //             })
    //         )
    //       );

    //       setAudioData(withDurations);
    //     } catch (err) {
    //       console.error('Failed to load audio list', err);
    //     }
    //   };

    // const handlePlay = (item: AudioItemType) => {

    //     if (currentSound && playingId === item.id) {
    //         currentSound.stop(() => {
    //             setPlayingId(null);
    //             setCurrentSound(null);
    //         });
    //         return;
    //     }

    //     const sound = new Sound(item?.audio_url, null, (error) => {
    //         if (error) {
    //             console.log('Error loading sound', error);
    //             return;
    //         }

    //         sound.play((success) => {
    //             if (!success) {
    //                 console.log('Playback failed');
    //             }
    //             setPlayingId(null);
    //             setCurrentSound(null);
    //         });

    //         setCurrentSound(sound);
    //         setPlayingId(item.id);
    //     });
    // };


    const handlePlay = (item: AudioItemType) => {
        // Stop current if same sound is playing
        if (currentSound && playingId === item.id) {
            currentSound.stop(() => {
                if (timerInterval) clearInterval(timerInterval);
                setPlayingId(null);
                setCurrentSound(null);
                setRemainingTime(prev => ({ ...prev, [item.id]: 0 }));
            });
            return;
        }

        // Stop and release previous sound
        if (currentSound) {
            currentSound.stop();
            currentSound.release();
        }
        if (timerInterval) clearInterval(timerInterval);

        const sound = new Sound(item.audio_url, null, (error) => {
            if (error) {
                console.log('Error loading sound', error);
                return;
            }

            const duration = Math.floor(sound.getDuration()); // in seconds
            setRemainingTime(prev => ({ ...prev, [item.id]: duration }));

            // Timer to update remaining time
            const interval = setInterval(() => {
                setRemainingTime(prev => {
                    const timeLeft = (prev[item.id] ?? duration) - 1;
                    if (timeLeft <= 0) {
                        clearInterval(interval);
                        setPlayingId(null);
                        setCurrentSound(null);
                        return { ...prev, [item.id]: 0 };
                    }
                    return { ...prev, [item.id]: timeLeft };
                });
            }, 1000);

            setTimerInterval(interval);

            sound.play((success) => {
                if (!success) {
                    console.log('Playback failed');
                }
                clearInterval(interval);
                setPlayingId(null);
                setCurrentSound(null);
            });

            setCurrentSound(sound);
            setPlayingId(item.id);
        });
    };


    const data = [
        {
            id: '1', title: 'Morning Adhkar'
            , image: require('../../../assets/Imgages/Sanctum/Resource/DhikrAndMedition/HeartMeditation.png'),
            "audio_url": "https://file-examples.com/storage/fe0d4ef3b467fe96a99bd97/2017/11/file_example_MP3_700KB.mp3"
        },
        {
            id: '2', title: 'Morning Adhkar'
            , image: require('../../../assets/Imgages/Sanctum/Resource/DhikrAndMedition/HeartMeditation.png'),
            "audio_url": "https://file-examples.com/storage/fe0d4ef3b467fe96a99bd97/2017/11/file_example_MP3_700KB.mp3"
        },
        {
            id: '3', title: 'Morning Adhkar'
            , image: require('../../../assets/Imgages/Sanctum/Resource/DhikrAndMedition/HeartMeditation.png'),
            "audio_url": "https://file-examples.com/storage/fe0d4ef3b467fe96a99bd97/2017/11/file_example_MP3_700KB.mp3"
        },
        {
            id: '4', title: 'Morning Adhkar'
            , image: require('../../../assets/Imgages/Sanctum/Resource/DhikrAndMedition/HeartMeditation.png'),
            "audio_url": "https://file-examples.com/storage/fe0d4ef3b467fe96a99bd97/2017/11/file_example_MP3_700KB.mp3"
        },

    ]
    return (
        <ScrollView flex-1>
            <View style={{ backgroundColor: '#E8F6F6', padding: '4%' }}>
                <View style={{}}>
                    <LinearGradient
                        colors={[  '#AAC0AA00', "#93C13D", ]} // Gradient colors (adjust as needed)
                        style={tw`w-full h-52 rounded-lg overflow-hidden mt-4`}
                    >
                        <VideoPlayer
                            loop
                            repeat
                            // controls
                            // controlsStyles={tw`bg-gray-500 rounded-lg`}
                            // videoStyle={styles.video}
                            // videoProps={{
                            //     resizeMode: 'contain', // Adjust the video size
                            //     repeat: true, // Loop the video
                            // }}
                            source={require('../../../assets/video/SampleVideo_1280x720_1mb.mp4')}
                            // source={{ uri: 'https://wcmauthorguide.illinois.gov/media/videos/sample-videos/hourglass-mp4' }}
                            thumbnail={require('../../../assets/Imgages/AddLogs/MyDay/Dhikr.png')}
                            autoplay
                            style={tw`w-[95%] h-full rounded-2xl mx-auto px-6`} // Apply the full width and height for the video player
                        />
                    </LinearGradient>
                </View>
            </View>
            <View style={tw``}>
                <FlatList
                    data={data}
                    renderItem={(item) => {
                        console.log(item?.item, 'item in flatlist');
                        return (
                            <TouchableOpacity
                                style={tw`flex-row gap-2 items-center justify-center,  ${playingId === item?.item?.id ? "bg-[#6B7C6B12]" : ''} px-2 rounded-2xl mb-4`}
                                onPress={() => handlePlay(item?.item)}
                            >
                                <Image
                                style={tw`w-12 h-12`}
                                    source={item?.item?.image}
                                />
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-base font-semibold text-black`}>
                                        {item?.item?.title}
                                    </Text>
                                    <View style={tw`flex-row items-center mt-1`}>
                                        <Text style={tw`text-xs text-gray-500 mr-2`}>
                                            {playingId === item.item.id && remainingTime[item.item.id] != null
                                                ? `${remainingTime[item.item.id]} sec`
                                                : item.item.duration} sec
                                        </Text>

                                        {playingId === item?.item?.id ? (
                                            <LottieView
                                                style={{ width: 15, height: 15 }}
                                                source={require('../../../../Animation - 1744885633834.json')} autoPlay loop />
                                        ) : (
                                            ""
                                        )}
                                     
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default FifthRouteContent

const styles = StyleSheet.create({})