import { useMemo } from "react";
import { generateHtmlId } from "./generateHtmlId";

export function useHtmlId(preferredId?: string) {
  return useMemo<string>(() => {
    if (preferredId) {
      return preferredId;
    }
    return generateHtmlId();
  }, [preferredId]);
}
