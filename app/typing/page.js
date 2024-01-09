'use client'
// Import necessary styling libraries if not already imported
import React, { useState, useEffect } from 'react';

const RandomParagraphTypingTest = () => {
  const [paragraph, setParagraph] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState(null);
  const [timer, setTimer] = useState(60); // Initial countdown time in seconds
  const [wordCount, setWordCount] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);
  const [score, setScore] = useState(0);

  const generateRandomParagraph = () => {
    const loremIpsum =
      "The sun is shining, and the sky is blue. Birds are chirping happily in the trees, and a gentle breeze rustles the leaves. It's a beautiful day, perfect for a leisurely walk in the park. The flowers are in full bloom, displaying a vibrant array of colors. Take a moment to enjoy the simple pleasures of nature and embrace the serenity of the outdoors.";

    const words = loremIpsum.split(' ');
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomParagraph = words.slice(randomIndex, randomIndex + 50).join(' ');

    setParagraph(randomParagraph);
  };

  useEffect(() => {
    generateRandomParagraph();
  }, []);

  useEffect(() => {
    let countdownTimer;

    if (startTime && !endTime) {
      countdownTimer = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [startTime, endTime]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    // Counting words in the input
    const wordsTyped = inputValue.trim().split(/\s+/);
    setWordCount(wordsTyped.length);

    if (!startTime) {
      setStartTime(new Date());
      // Set a timeout to calculate WPM after 1 minute
      setTimeout(() => {
        setEndTime(new Date());
        checkWrongWords(wordsTyped);
      }, 60000); // 1 minute in milliseconds
    } else if (endTime) {
      checkWrongWords(wordsTyped);
    }
  };

  const checkWrongWords = () => {
    const typedWords = input.trim().split(/\s+/);
    const correctWords = paragraph.split(' ');
  
    const wrongWordsArray = typedWords.map((word, index) => {
      if (correctWords[index] !== undefined && word !== correctWords[index]) {
        return word;
      }
      return null;
    }).filter((word) => word !== null);
  
    setWrongWords(wrongWordsArray);
  
    // Calculate score by deducting points for wrong words
    const pointsPerWrongWord = 1; // You can adjust the points deducted per wrong word
    const score = Math.max(0, wordCount - wrongWordsArray.length * pointsPerWrongWord);
    setScore(score);
  };
  

  useEffect(() => {
    checkWrongWords();
  }, [input, paragraph]);

  useEffect(() => {
    if (endTime) {
      const timeDiff = endTime - startTime;
      const minutes = timeDiff / 10000;
      const wordsTyped = input.split(' ').length;

      const wpm = Math.round(wordsTyped / minutes);
      setWordsPerMinute(wpm);
    }
  }, [endTime, startTime, input]);

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <p className="text-lg font-semibold mb-4 text-gray-800">{paragraph}</p>
      <div className="flex justify-between items-center mb-4">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={input}
          onChange={handleInputChange}
          placeholder="Start typing here..."
          rows={5}
          cols={50}
        />
        <div className="flex flex-col items-end">
          <p className="text-gray-700 mb-2">Words typed: {wordCount}</p>
          {startTime && !endTime && <p className="text-blue-600 font-bold">Time remaining: {timer}s</p>}
          {endTime && (
            <div className="mb-2">
              <p className="text-red-600">Wrong words: {wrongWords.length}</p>
              {wrongWords.length > 0 && (
                <p className="text-red-600">Wrong words length: {wrongWords.join(', ').length}</p>
              )}
              <p className="text-green-600">Score: {score}</p>
            </div>
          )}
        </div>
      </div>
      {endTime && (
        <div>
          <p className="text-gray-700">Time taken: {((endTime - startTime) / 1000).toFixed(2)} seconds</p>
          <p className="text-gray-700">Words per minute: {wordsPerMinute}</p>
        </div>
      )}
    </div>
  );
};

const TypingTest = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Typing Test</h1>
      <RandomParagraphTypingTest />
    </div>
  );
};

export default TypingTest;
