import { RootState } from "@/app/providers/store/index.ts";

export const selectOverlayVisible = (state: RootState) => state.overlay.isVisible;
export const selectOverlayType =(state:RootState) => state.overlay.type;
export const selectOverlay = ( state: RootState ) => state.overlay;
