import { formatTime } from './dateHelper';

const testMessages = [
    {
        sender: 'bot',
        message: 'Hello!',
        timestamp: formatTime(new Date()),
    },
    {
        sender: 'bot',
        message: 'Some debug msg',
        timestamp: formatTime(new Date()),
    },
    {
        sender: 'user',
        message: 'Just another answer',
        timestamp: formatTime(new Date()),
    },
];



export default testMessages;