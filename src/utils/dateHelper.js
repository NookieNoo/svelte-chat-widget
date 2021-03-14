import { appFormats } from '../constants/appFormats';
import { format, isValid } from 'date-fns';

export const formatTime = (dateTime) => {
    return isValid(dateTime) ? format(dateTime, appFormats.time) : '';
}