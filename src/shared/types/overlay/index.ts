import { PayloadAction } from "@reduxjs/toolkit";

export type OverlayT = 
  | 'welcome-panel' 
  | 'task-detail'
  | 'create-task'
  | null;

export interface OverlayState {
  isVisible: boolean;
  type: OverlayT;
  taskID?: string | null;
};


export type OverlayPayloadType = PayloadAction<{type: OverlayState['type'], taskID?: string}>