import { formatTime } from './dateHelper';

const testMessages = [
    {
        sender: 'bot',
        message: 'Hello!',
        timestamp: formatTime(new Date()),
    },
    {
        sender: 'bot',
        message: 'How are you?',
        timestamp: formatTime(new Date()),
    },
    {
        sender: 'user',
        message: 'some message',
        timestamp: formatTime(new Date()),
    },
    {
        sender: 'user',
        message:
            'Hello have any questions or feedback? Alex or Kam will reply as soon as they can! In the meantime, come join our community Slack.',
            timestamp: formatTime(new Date()),
    },
    {
        sender: 'bot',
        message: 'Bye!',
        timestamp: formatTime(new Date()),
    },
];



export default testMessages;