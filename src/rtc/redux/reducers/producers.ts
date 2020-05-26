import { createReducer } from '@reduxjs/toolkit';
import {
  setRoomState,
  addProducer,
  removeProducer,
  setProducerPaused,
  setProducerResumed,
  setProducerTrack,
  setProducerScore,
} from '../stateActions';

interface StateType {
  [producerId: string]: {
    id: string;
    deviceLabel?: string;
    type?: 'front' | 'back' | 'share';
    paused: boolean;
    track: MediaStreamTrack;
    codec: string;
    rtpParameters?: {};
    score: { ssrc: number; score: number }[];
  };
}

const initialState: StateType = {};

export default createReducer<StateType>(initialState, (builder) => {
  builder
    .addCase(setRoomState, (state, action) => {
      const roomState = action.payload.state;

      if (roomState === 'closed') {
        state = {};
      }
    })
    .addCase(addProducer, (state, action) => {
      const { producer } = action.payload;

      state[producer.id] = producer;
    })
    .addCase(removeProducer, (state, action) => {
      const { producerId } = action.payload;

      delete state[producerId];
    })
    .addCase(setProducerPaused, (state, action) => {
      const { producerId } = action.payload;
      const producer = state[producerId];
      const newProducer = { ...producer, paused: true };

      state[producerId] = newProducer;
    })
    .addCase(setProducerResumed, (state, action) => {
      const { producerId } = action.payload;
      const producer = state[producerId];
      const newProducer = { ...producer, paused: false };

      state[producerId] = newProducer;
    })
    .addCase(setProducerTrack, (state, action) => {
      const { producerId, track } = action.payload;
      const producer = state[producerId];
      const newProducer = { ...producer, track };

      state[producerId] = newProducer;
    })
    .addCase(setProducerScore, (state, action) => {
      const { producerId, score } = action.payload;
      const producer = state[producerId];

      if (!producer) {
        return;
      }

      const newProducer = { ...producer, score };
      state[producerId] = newProducer;
    });
});
