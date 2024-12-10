'use client';

import { Button } from '@mantine/core';
import { sendGTMEvent } from '@next/third-parties/google';

export function EventButton() {
  return (
    <div>
      <Button
        color="red"
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send Event
      </Button>
    </div>
  );
}
