import { RootState } from "@/app/providers/store/index.ts";

export const selectThemeMode = (state: RootState) => state.theme.mode ;
