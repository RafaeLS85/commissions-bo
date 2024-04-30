import { useMemo } from "react";
import { useSessionStore } from "@/store/session";

export default function usePermission({ permission }: { permission: string }) {
  const session = useSessionStore((state) => state.session);

  const hasPermission = useMemo(() => {
    if (!session) return false;

    const permissions = session.permissions;

    return permissions.includes(permission);
  }, [session, permission]);

  return hasPermission;
}
