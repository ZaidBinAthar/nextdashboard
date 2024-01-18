'use client'
import React, { useState, useEffect, useRef } from 'react';

const TypingTest = () => {
  const words = [
    'react', 'javascript', 'coding', 'challenge', 'developer', 'typing', 'component', 'state', 'props', 'function'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    if (currentWordIndex === 0) {
      setStartTime(null);
    } else if (currentWordIndex === words.length) {
      const endTime = new Date();
      const elapsedTime = (endTime - startTime) / 1000; // in seconds
      const wpm = Math.round((wordCount / elapsedTime) * 60);

      alert(`Congratulations! You typed at ${wpm} words per minute.`);
    }
  }, [currentWordIndex, wordCount, startTime]);

  const handleInputChange = (e) => {
    const typedValue = e.target.value.trim();

    if (currentWordIndex === 0 && typedValue !== '' && !startTime) {
      setStartTime(new Date());
    }

    const currentWord = words[currentWordIndex];
    if (typedValue === currentWord) {
      setWordCount(wordCount + 1);
      setCurrentWordIndex(currentWordIndex + 1);
      setInputValue('');
    }
  };

  const handleRestart = () => {
    setCurrentWordIndex(0);
    setInputValue('');
    setStartTime(null);
    setWordCount(0);
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Typing Test</h2>
      <p>{words.slice(currentWordIndex).join(' ')}</p>
      <textarea
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Start typing..."
      />
      <p>Words per Minute: {wordCount > 0 ? Math.round((wordCount / ((new Date() - startTime) / 1000)) * 60) : 0}</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TypingTest;
