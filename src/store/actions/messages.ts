import { createAction } from '@reduxjs/toolkit';
import { Message } from '../../types';

export const AddMessageActon = createAction<Message>('MESSAGES_ADD_MESSAGE');
export const DeleteMessageAction = createAction<Message>('MESSAGES_DELETE_MESSAGE');
export const UpdateMessageAction = createAction<Message>('MESSAGES_UPDATE_MESSAGE');
