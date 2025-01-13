import {RootState} from "./store";
import {ValuesType} from "./value-reducer";

export const selectCount = (state: RootState): number => state.count
export const selectValues = (state: RootState): ValuesType => state.values