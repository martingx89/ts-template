import { createReducer } from '@reduxjs/toolkit';
import { Message } from '../../types';
import { AddMessageActon, DeleteMessageAction, UpdateMessageAction } from '../actions';

export type MessagesType = {
  messages: Message[];
  position: string;
};

const INIT_STATE: MessagesType = {
  messages: [],
  position: 'top',
};

export const messagesRedcuer = createReducer(INIT_STATE, (builder) => {
  builder
    .addCase(AddMessageActon, (state, action) => {
      state.messages = [...state.messages, action.payload];
    })
    .addCase(UpdateMessageAction, (state, action) => {
      state.messages = [];
    })
    .addCase(DeleteMessageAction, (state, action) => {
      state.messages = [];
    });
});
