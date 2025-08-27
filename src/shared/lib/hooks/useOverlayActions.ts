
//  импорт необходимых модулей
import { useCallback } from "react";
import { useDispatch } from "react-redux";


// импорт экшенов
import { showOverlay, hideOverlay, toggleOverlay } from "../slices/overlay-slice.ts";

// импорт типа отправителя
import { AppDispatch } from "@/app/providers/store/index.ts";

// импорт типов
import { OverlayT} from "@/shared/types/overlay/index.ts";


export const useOverlayActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleOverlayAction = useCallback(() => {
    dispatch(toggleOverlay());
  },[dispatch]);

  const showOverlayAction = useCallback(({ type, taskID} : { type: OverlayT, taskID?: string }) => {

    dispatch(showOverlay({  
      type: type,
      taskID: taskID
    }))
  },[dispatch]);

  const hideOverlayAction = useCallback(() => {
    dispatch(hideOverlay());
  },[dispatch]);

  return { toggleOverlayAction, showOverlayAction, hideOverlayAction };
}