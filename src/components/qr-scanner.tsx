'use client';

import { useEffect, useId, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (decodedText: string) => void;
  onError?: (error: unknown) => void;
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const scannerId = `qr-reader-${useId().replace(/:/g, '')}`;
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        scannerId,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        false
      );

      scannerRef.current.render(
        (decodedText) => {
          onScan(decodedText);
          scannerRef.current?.pause(true);
        },
        (error) => {
          if (onError) onError(error);
        }
      );
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
        scannerRef.current = null;
      }
    };
  }, [scannerId, onScan, onError]);

  return (
    <div 
      id={scannerId} 
      className="w-full max-w-sm mx-auto overflow-hidden rounded-xl border bg-background aspect-square [&_a]:text-primary [&_a]:underline [&_button]:bg-primary [&_button]:text-primary-foreground [&_button]:px-4 [&_button]:py-2 [&_button]:rounded-md [&_button]:mt-2 flex flex-col justify-center text-center p-4" 
    />
  );
}
