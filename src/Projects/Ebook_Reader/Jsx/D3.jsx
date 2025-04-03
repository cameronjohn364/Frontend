import "../Css/D3.css"
import { useState, useEffect } from 'react';

const D3 = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speed, setSpeed] = useState(1); // New state for speech speed

  // Load voices
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) {
      console.warn('Speech synthesis not supported');
      return;
    }

    const loadVoices = () => {
      const voices = synth.getVoices();
      setVoices(voices);
      if (voices.length > 0 && !selectedVoice) {
        setSelectedVoice(voices[0]);
      }
    };

    loadVoices(); // Initial load
    synth.addEventListener('voiceschanged', loadVoices);

    return () => {
      synth.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  // Speech functions
  const handleSpeak = () => {
    if (!text) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = speed; // Set speaking speed
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="EbookReaderApp_D3">
      {!window.speechSynthesis ? (
        <p>Browser does not support text-to-speech.</p>
      ) : (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to speak..."
          />
          
          <select
            value={voices.indexOf(selectedVoice)}
            onChange={(e) => setSelectedVoice(voices[e.target.value])}
          >
            {voices.map((voice, index) => (
              <option key={index} value={index}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>

          {/* Speed control */}
          <div className="speed-control">
            <label>
              Speed: {speed}x
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
              />
            </label>
          </div>

          <div>
            <button onClick={handleSpeak} disabled={isSpeaking}>
              Speak
            </button>
            <button onClick={handleStop} disabled={!isSpeaking}>
              Stop
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default D3;