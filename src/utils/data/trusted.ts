import { ITrusted } from "../../models";
import {
  GooggleMuted,
  KPMGMuted,
  PayStackMuted,
} from "../exports/assets";

export const trustedData: ITrusted[] = [
  { id: 1, name: PayStackMuted },
  { id: 2, name: GooggleMuted },
  { id: 3, name: KPMGMuted },
];
