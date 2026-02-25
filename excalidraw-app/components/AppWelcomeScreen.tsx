import React from "react";

export const AppWelcomeScreen: React.FC<{
  onCollabDialogOpen: () => any;
  isCollabEnabled: boolean;
}> = React.memo(() => {
  // Users always arrive via a Blay room URL — no welcome screen needed
  return null;
});
