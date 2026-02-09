// VideoPlayer.jsx - Video Player Component
import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  X, SkipBack, SkipForward, Clock, CheckCircle
} from 'lucide-react';

export default function VideoPlayer({ 
  videoUrl, 
  title, 
  duration, 
  onClose, 
  onComplete,
  exerciseId,
  isCompleted = false
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const updateDuration = () => {
      setTotalDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (onComplete) {
        onComplete(exerciseId);
      }
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
    };
  }, [exerciseId, onComplete]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * totalDuration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(pos * 100);
    }
  };

  const skip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(true)}
    >
      {/* Video Element */}
      <div className="relative w-full h-full flex items-center justify-center">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            onClick={togglePlay}
          />
        ) : (
          <div className="text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-md">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl font-semibold mb-2">{title}</p>
              <p className="text-white/60 text-sm mb-4">
                Video URL not set. Add your video URL to play.
              </p>
              <p className="text-white/40 text-xs">
                Duration: {duration}
              </p>
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        {showControls && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                <div>
                  <h3 className="text-white text-xl font-bold">{title}</h3>
                  {isCompleted && (
                    <div className="flex items-center gap-1 text-green-400 text-sm mt-1">
                      <CheckCircle className="w-4 h-4" />
                      Completed
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <button
                onClick={togglePlay}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-6 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white" />
                ) : (
                  <Play className="w-12 h-12 text-white fill-white" />
                )}
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
              {/* Progress Bar */}
              <div 
                className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer group"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-pink-500 rounded-full transition-all relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => skip(-10)}
                    className="text-white hover:text-pink-400 transition-colors"
                    title="Rewind 10s"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-pink-400 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 fill-white" />
                    )}
                  </button>
                  <button
                    onClick={() => skip(10)}
                    className="text-white hover:text-pink-400 transition-colors"
                    title="Forward 10s"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-pink-400 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{formatTime(totalDuration) || duration}</span>
                  </div>
                </div>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize className="w-5 h-5" />
                  ) : (
                    <Maximize className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
