import React, { useState } from 'react';

function DynamicInputList({ onItemsChange, placeholder }) {
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);

    const addTag = () => {
        if (inputValue.trim() === '') { // 공백일 경우
            console.log("병명을 입력해주세요.");
            return;
        }
        if (tags.includes(inputValue)) { // 이미 있을 경우
            console.log("이미 추가된 병명입니다.");
            return;
        }

        // 추가 성공 시
        const updatedTags = [...tags, inputValue];
        setTags(updatedTags);
        onItemsChange(updatedTags);
        setInputValue('');
    };

    const removeTag = (tagToRemove) => {
        const updatedTags = tags.filter(tag => tag !== tagToRemove);
        setTags(updatedTags);
        onItemsChange(updatedTags);
    };

    // 입력 필드 값 변경
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className="flex items-center mb-2">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="flex-1 w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500 mx-auto"
                />
                <button
                    onClick={addTag}
                    className="ml-2 bg-mint01 hover:bg-mint02 text-gray-800 px-2 py-2 text-xs border border-mint03 rounded transition-colors duration-200 ease-in-out"
                >
                    추가
                </button>
            </div>
            {/* 태그 리스트 */}
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-gray-200 rounded px-2 py-1 text-sm mr-2">
                        {tag}
                        <button
                            onClick={() => removeTag(tag)}
                            className="ml-2 rounded-full bg-red-200 hover:bg-red-300 text-red-600 p-1 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DynamicInputList;