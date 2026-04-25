import { authService } from "./auth.service";
import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  return useMutation({
    mutationFn: () => authService.logout(),
  });
}
